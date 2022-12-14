import React from "react";
import PropTypes from "prop-types";
import Header from "@layouts/components/Header";
import Sidebar from "@layouts/components/Sidebar";
const MeLayout = ({ children }) => {
  return (
    <div className="max-w-[140rem] mx-auto">
      <Header></Header>
      <div className="container py-24 flex">
        <Sidebar></Sidebar>
        {children}
      </div>
    </div>
  );
};
MeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MeLayout;
