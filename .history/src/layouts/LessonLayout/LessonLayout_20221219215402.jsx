import React from "react";
import PropTypes from "prop-types";

import SidebarLesson from "@layouts/components/SidebarLesson";

const LessonLayout = ({ children }) => {
  return (
    <>
      <SidebarLesson></SidebarLesson>
      <div className="ml-auto">{children}</div>
    </>
  );
};
LessonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LessonLayout;
