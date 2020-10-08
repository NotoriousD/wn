import React from "react";
import PropTypes from "prop-types";

export const StatsCard = ({ title, symbol, value }) => {
  return (
    <div className="card card-stats">
      <div className="title">{title}</div>
      <div className="content">
        <p className="cardStat">
          <span className="symbol">{symbol}</span>
          {value}
        </p>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  value: PropTypes.number,
};

StatsCard.defaultProps = {
  title: "Empty field",
  symbol: "",
  value: 0,
};
