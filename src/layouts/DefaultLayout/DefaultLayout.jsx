import PropTypes from "prop-types";
import React from "react";
import Header from "@layouts/components/Header";
import Footer from "@layouts/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
