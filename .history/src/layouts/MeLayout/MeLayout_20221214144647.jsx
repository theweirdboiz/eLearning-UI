import React from "react";
import Header from "@layouts/components/Header";
import Sidebar from "@layouts/components/Sidebar";
const MeLayout = () => {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="content">12</div>
    </div>
  );
};

export default MeLayout;
