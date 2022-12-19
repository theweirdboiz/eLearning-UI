import PropTypes from "prop-types";
import React from "react";
import Header from "@layouts/components/Header";
import Footer from "@layouts/components/Footer";

// import MessengerCustomerChat from "react-messenger-customer-chat";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      {/* <MessengerCustomerChat pageId="101294829508960" appId="890097692009410" /> */}
      <Footer />
    </>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
