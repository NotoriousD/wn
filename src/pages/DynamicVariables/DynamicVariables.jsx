import React, { useState, useEffect, useMemo, useCallback } from "react";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";
import { Circular } from "../../components/Circular/Circular";
import { CSSTransition } from "react-transition-group";
import moment from "moment";
import { fetchAPI } from "../../api";
import Search from "../../components/Search/Search";
import { exportCSV } from "../../api";
import Export from "../../components/Export/Export";
import "./DynamicVariables.scss";

const columns = [
  {
    name: "Dynamic variable",
    selector: "dynamic_variable",
    sortable: true,
    grow: 4,
    style: {
      fontSize: "14px",
    },
  },
  {
    name: "Casinos",
    selector: "brand",
    sortable: true,
    grow: 2,
    style: {
      fontSize: "14px",
    },
  },
  {
    name: "Clicks",
    selector: "clicks",
    sortable: true,
  },
  {
    name: "Registrations",
    selector: "registrations",
    sortable: true,
  },
  {
    name: "FTDS",
    selector: "ftds",
    sortable: true,
  },
  {
    name: "Deposits",
    selector: "deposits",
    sortable: true,
  },
  {
    name: "Net Cash",
    selector: "net_cash",
    sortable: true,
  },
  {
    name: "Commission",
    selector: "commission",
    sortable: true,
  },
  {
    name: "No of deposits",
    selector: "no_of_deposits",
    sortable: true,
  },
];

const customStyles = {
  header: {
    style: {
      fontSize: "24px",
      fontWeight: "800",
    },
  },
  headCells: {
    style: {
      fontSize: "14px",
      textAlign: "center",
    },
  },
};

const DymanicVariables = () => {
  const [variables, setVariables] = useState({
    reports: [],
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const brandsList = useSelector((store) => store.brands);
  const token = useSelector((store) => store.auth.currentUser.token);
  const dates = useSelector((store) => store.dates);

  const { reports } = variables;

  const actionsMemo = useMemo(
    () => <Export onExport={() => exportCSV.downloadCSV(reports)} />,
    [reports]
  );

  let sortVariable = "";
  if (brandsList.brands.length !== 0) {
    brandsList.brands.map((brand) => {
      return (sortVariable += `&brand_ids[]=${brand}`);
    });
  }

  const today = moment(new Date()).format("YYYY-MM-DD");
  let dateVariable = `date_from=${today}&date_to=${today}`;
  if (dates.dates.start !== 0 && dates.dates.end !== 0) {
    dateVariable = `date_from=${dates.dates.start}&date_to=${dates.dates.end}`;
  }

  const fetchDynamicVariables = useCallback(
    (page, search) => {
      setLoading(true);
      const query = search ? `&search=${search}` : "";
      const params = {
        sort: sortVariable,
        date: dateVariable,
        token: token,
        search: query,
        page: page,
      };
      fetchAPI
        .fetchDataFromServer({
          type: "dynamic_variables",
          ...params,
        })
        .then(({ data: { reports, total_count } }) => {
          setVariables({
            reports: reports,
          });
          setTotalRows(total_count);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        })
        .catch(() => {
          setVariables({
            reports: {
              error: true,
            },
          });
        });
    },
    [dateVariable, sortVariable, token]
  );

  const handlePageChange = (page) => {
    fetchDynamicVariables(page, search);
  };

  const searchQuery = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    fetchDynamicVariables(1, search);
  }, [fetchDynamicVariables, search]);

  return (
    <Row>
      <CSSTransition timeout={3000} classNames="fade">
        <Title title="Reports" />
      </CSSTransition>
      <div className="data__wrapper">
        <Search searchQuery={searchQuery} />
        <DataTable
          title="Dynamic variables"
          columns={columns}
          data={reports}
          progressPending={loading}
          customStyles={customStyles}
          pagination
          paginationServer
          paginationPerPage={20}
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          progressComponent={<Circular />}
          actions={actionsMemo}
        />
      </div>
    </Row>
  );
};

export default DymanicVariables;
