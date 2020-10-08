import React from "react";
import "./pagination.css";

const Pagination = ({ totalVariables, paginate, currentPage }) => {
  const pageNumbers = [];
  const paginationNumbers = [];

  for (let i = 1; i <= totalVariables; i++) {
    pageNumbers.push(i);
  }
  if (currentPage === totalVariables && totalVariables > 3) {
    for (let i = currentPage - 5; i <= currentPage; i++) {
      paginationNumbers.push(i);
    }
  } else if (currentPage > 3) {
    for (let i = currentPage; i <= currentPage + 5; i++) {
      paginationNumbers.push(i);
    }
  } else if (totalVariables <= 3) {
    for (let i = 1; i <= totalVariables; i++) {
      paginationNumbers.push(i);
    }
  } else {
    for (let i = currentPage; i <= 5; i++) {
      paginationNumbers.push(i);
    }
  }
  return (
    <div className="pagination__nav">
      <ul className="pagination">
        {currentPage > 3 ? (
          <li className="page-item">
            <button onClick={() => paginate(1)} className={"page-link"}>
              1
            </button>
          </li>
        ) : (
          ""
        )}
        {currentPage > 3 ? <span className="pagination-dots">...</span> : ""}
        {paginationNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "active-page page-item" : "page-item"
            }
          >
            <button onClick={() => paginate(number)} className={"page-link"}>
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalVariables && totalVariables > 3 ? (
          <span className="pagination-dots">...</span>
        ) : (
          ""
        )}
        {currentPage < totalVariables && totalVariables > 3 ? (
          <li className="page-item">
            <button
              onClick={() => paginate(totalVariables)}
              className={"page-link"}
            >
              {totalVariables}
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Pagination;
