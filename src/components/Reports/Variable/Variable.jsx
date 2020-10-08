import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Variable({ variables, loading }) {
  if (loading) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Dynamic variables report</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    );
  }

  return (
    <Table striped bordered hover className="report-table">
      <thead>
        <tr>
          <th>Dynamic variables report</th>
        </tr>
      </thead>
      <tbody>
        {variables.map((variable) => (
          <tr key={variable.id}>
            <td>{variable.dynamic_variables_report}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
