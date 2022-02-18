import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../../containers/Layout";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
