import React from "react";
import PropTypes from "prop-types";

import SidebarLesson from "@layouts/components/SidebarLesson";

const LessonLayout = ({ children }) => {
  return (
    <div>
      <SidebarLesson></SidebarLesson>
      {children}
    </div>
  );
};
LessonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LessonLayout;
