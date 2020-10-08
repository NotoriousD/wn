import React, { useState, useEffect } from "react";
import Variable from "./Variable/Variable";
import axios from "axios";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Compaigns = () => {
  const [variables, setVar] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://www.winningpartner.com:26134/api/v1/api_reports",
        {
          headers: {
            Authorization:
              'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
          },
        }
      );
      setVar(res.data.api_reports);
    };
    fetchPosts();
  }, []);

  return (
    <Row>
      <h1 className={"page__title"}>API Reports</h1>
      <Variable variables={variables} />
    </Row>
  );
};

export default Compaigns;
