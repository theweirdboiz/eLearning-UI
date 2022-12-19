import React from "react";
import PropTypes from "prop-types";

const LessonLayout = ({ children }) => {
  return <div>{children}</div>;
};
LessonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LessonLayout;
