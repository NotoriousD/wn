import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Row } from "react-bootstrap";
import Title from "../../components/Title/Title";
import DataTable from "react-data-table-component";
import { Circular } from "../../components/Circular/Circular";
import { fetchAPI } from "../../api";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const columns = [
  {
    name: "Deal",
    selector: "name",
    sortable: true,
  },
  {
    name: "Short URL",
    selector: "generated_url",
    sortable: true,
  },
];

const Compaigns = () => {
  const [variables, setVariables] = useState({
    compaigns: [],
  });
  const [loading, setLoading] = useState(false);
  const token = useSelector((store) => store.auth.currentUser.token);
  const brandsList = useSelector((store) => store.brands);

  let sortVariable = "";
  if (brandsList.brands.length !== 0) {
    brandsList.brands.map((brand) => {
      return (sortVariable += `&brand_ids[]=${brand}`);
    });
  }

  const fetchCompaignsData = useCallback(() => {
    setLoading(true);
    const params = {
      sort: sortVariable,
      token: token,
    };
    fetchAPI
      .fetchDataWithoutDateFromServer({
        type: "links",
        ...params,
      })
      .then(({ data: { data } }) => {
        console.log(data);
        setVariables({
          compaigns: data,
        });
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(() => {
        setVariables({
          compaigns: {
            error: true,
          },
        });
      });
  }, [sortVariable, token]);

  useEffect(() => {
    fetchCompaignsData();
  }, [brandsList, fetchCompaignsData]);

  const getNewData = useMemo(() => {
    return variables.compaigns.map((compaign) => {
      return {
        ...compaign,
        ...compaign.attributes,
      };
    });
  }, [variables]);

  return (
    <Row>
      <Title title="Manage" />
      <div className="data__wrapper">
        <DataTable
          title="Compaigns"
          columns={columns}
          data={getNewData}
          progressPending={loading}
          progressComponent={<Circular />}
        />
      </div>
    </Row>
  );
};

export default Compaigns;
