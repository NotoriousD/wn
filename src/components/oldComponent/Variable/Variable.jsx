import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import loader from "../../assets/loader.gif";

export default function Variable({ variables, loading, classes }) {
  if (variables.length === 0) {
    return <h2>There are not variables</h2>;
  }
  if (loading) {
    return (
      <img
        className="loader"
        width="300"
        height="230"
        src={loader}
        alt="loading...."
      />
    );
  } else {
    const vars = Object.keys(variables[0]);
    return (
      <Table striped bordered hover className={classes}>
        <thead>
          <tr>
            {vars.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {variables.map((variable) => (
            <tr key={variable.id}>
              {vars.map((item) => (
                <td key={Math.random()}>{variable[item]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
