import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, classes }) => {
  return <h1 className={classes}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
};

Title.defaultProps = {
  title: "Simple title",
  classes: "page__title",
};

export default Title;
