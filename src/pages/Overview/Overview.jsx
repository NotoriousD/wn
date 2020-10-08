import React, { useState, useEffect, useCallback } from "react";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import Title from "../../components/Title/Title";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";
import { Circular } from "../../components/Circular/Circular";
import { CSSTransition } from "react-transition-group";
import { fetchAPI } from "../../api";
import moment from "moment";
import "./Overview.css";

const customStyles = {
  header: {
    style: {
      fontSize: "24px",
      fontWeight: "800",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
    },
  },
};

const dataCasino = [
  {
    name: "Brand",
    selector: "brand",
    sortable: true,
    grow: 3,
    style: {
      fontSize: "16px",
      fontWeight: 600,
    },
  },
  {
    name: "Commission",
    selector: "commission",
    sortable: true,
  },
  {
    name: "Net Cash",
    selector: "net_cash",
    sortable: true,
  },
  {
    name: "Deposits",
    selector: "deposits",
    sortable: true,
  },
  {
    name: "Clicks",
    selector: "clicks",
    sortable: true,
  },
  {
    name: "FTDS",
    selector: "ftds",
    sortable: true,
  },
  {
    name: "Registrations",
    selector: "registrations",
    sortable: true,
  },
  {
    name: "No of deposits",
    selector: "no_of_deposits",
    sortable: true,
  },
];

const dataDeal = [
  {
    name: "Deal",
    selector: "deal",
    sortable: true,
    grow: 3,
    style: {
      fontSize: "16px",
      fontWeight: 600,
    },
  },
  {
    name: "Commission",
    selector: "commission",
    sortable: true,
  },
  {
    name: "Net Cash",
    selector: "net_cash",
    sortable: true,
  },
  {
    name: "Deposits",
    selector: "deposits",
    sortable: true,
  },
  {
    name: "Clicks",
    selector: "clicks",
    sortable: true,
  },
  {
    name: "FTDS",
    selector: "ftds",
    sortable: true,
  },
  {
    name: "Registrations",
    selector: "registrations",
    sortable: true,
  },
  {
    name: "No of deposits",
    selector: "no_of_deposits",
    sortable: true,
  },
];

const Overview = () => {
  const [casinos, setVariables] = useState({
    casinos: [],
    stats: [],
  });
  const [deals, setDeals] = useState({
    deals: [],
  });
  const [loading, setLoading] = useState({
    casino: false,
    deal: false,
  });
  const [totalRows, setTotalRows] = useState({
    casino: 0,
    deal: 0,
  });
  const brandsList = useSelector((store) => store.brands);
  const dates = useSelector((store) => store.dates);
  const token = useSelector((store) => store.auth.currentUser.token);

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

  const fetchCasinos = useCallback(
    (page) => {
      setLoading({ casino: true });
      const params = {
        sort: sortVariable,
        date: dateVariable,
        token: token,
        page: page,
      };
      fetchAPI
        .fetchDataFromServer({
          type: "casinos",
          ...params,
        })
        .then(({ data: { reports, totals, total_count } }) => {
          setVariables({
            casinos: reports,
            stats: totals,
          });
          setTotalRows({ casino: total_count });
          setTimeout(() => {
            setLoading({ casino: false });
          }, 1000);
        })
        .catch(() => {
          setVariables({
            casinos: {
              error: true,
            },
          });
        });
    },
    [sortVariable, dateVariable, token]
  );

  const fetchDeals = useCallback(
    (page) => {
      setLoading({ deal: true });
      const params = {
        sort: sortVariable,
        date: dateVariable,
        token: token,
        page: page,
      };
      fetchAPI
        .fetchDataFromServer({
          type: "deals",
          ...params,
        })
        .then(({ data: { reports, total_count } }) => {
          setDeals({
            deals: reports,
          });
          setTotalRows({ deal: total_count });
          setTimeout(() => {
            setLoading({ deal: false });
          }, 1000);
        })
        .catch(() => {
          setVariables({
            casinos: {
              error: true,
            },
          });
        });
    },
    [sortVariable, dateVariable, token]
  );

  useEffect(() => {
    fetchCasinos(1);
    fetchDeals(1);
  }, [dates, brandsList, fetchCasinos, fetchDeals]);

  const handlePageCasinoChange = (page) => {
    fetchCasinos(page);
  };

  const handlePageDealChange = (page) => {
    fetchDeals(page);
  };

  return (
    <Row>
      <Title title="Overview" />
      <CSSTransition in={true} timeout={1000} classNames="fade">
        <Dashboard stats={casinos.stats} />
      </CSSTransition>
      <div className="data__wrapper">
        <DataTable
          title="Casinos"
          columns={dataCasino}
          data={casinos.casinos}
          progressPending={loading.casino}
          customStyles={customStyles}
          pagination
          paginationServer
          paginationPerPage={20}
          paginationTotalRows={totalRows.casino}
          onChangePage={handlePageCasinoChange}
          progressComponent={<Circular />}
        />
      </div>
      <div className="data__wrapper">
        <DataTable
          title="Deals"
          columns={dataDeal}
          data={deals.deals}
          progressPending={loading.deal}
          customStyles={customStyles}
          pagination
          paginationServer
          paginationPerPage={20}
          paginationTotalRows={totalRows.deal}
          onChangePage={handlePageDealChange}
          progressComponent={<Circular />}
        />
      </div>
    </Row>
  );
};

export default Overview;
