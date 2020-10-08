import React, { useState, useEffect, useCallback } from "react";
import { Row } from "react-bootstrap";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { Circular } from "../../components/Circular/Circular";
import { fetchAPI } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css";

const columns = [
  {
    name: "Casinos",
    selector: "brand",
    sortable: true,
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

const Casinos = () => {
  const [variables, setVariables] = useState({
    daily: [],
  });
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const token = useSelector((store) => store.auth.currentUser.token);

  const fetchDailyVariables = useCallback(
    (page) => {
      setLoading(true);
      const params = {
        token: token,
        page: page,
      };
      fetchAPI
        .fetchDataFromServer({
          type: "casinos",
          ...params,
        })
        .then(({ data: { reports, total_count } }) => {
          console.log(reports);
          setVariables({
            daily: reports,
          });
          setTotalRows(total_count);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        })
        .catch(() => {
          setVariables({
            daily: {
              error: true,
            },
          });
        });
    },
    [token]
  );

  const handleChangePage = (page) => {
    fetchDailyVariables(page);
  };

  useEffect(() => {
    fetchDailyVariables(1);
  }, [fetchDailyVariables]);

  return (
    <Row>
      <Title title="Reports" />
      <div className="data__wrapper">
        <DataTable
          title="Casinos"
          columns={columns}
          data={variables.daily}
          progressPending={loading}
          pagination
          paginationServer
          paginationPerPage={20}
          paginationTotalRows={totalRows}
          onChangePage={handleChangePage}
          progressComponent={<Circular />}
        />
      </div>
    </Row>
  );
};

export default Casinos;
