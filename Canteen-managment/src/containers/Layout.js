import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="d-flex">
        <Sidebar />
        <div className="main">{children}</div>
      </div>
    </>
  );
};

export default Layout;
