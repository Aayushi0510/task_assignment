import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import DashboardWrappper from "./pages/Dashboard/DashboardWrapper";
import EditUser from "./pages/user/edit/EditUser";
import UserListWrapper from "./pages/user/list/UserListWrapper";
import Layout from "./components/Layout/Layout";
import AddUserWrapper from "./pages/user/add/AddUserWrapper";
import ProtectedRoutes from "./pages/ProtectedRoutes";

const Routing = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/dashboard"
            element={<ProtectedRoutes Components={DashboardWrappper} />}
          />
          <Route path="/" element={<Login />} />
          <Route
            path="/users"
            element={<ProtectedRoutes Components={UserListWrapper} />}
          />

          <Route
            path="/users/add"
            element={<ProtectedRoutes Components={AddUserWrapper} />}
          />
          <Route
            path="/users/edit/:id"
            element={<ProtectedRoutes Components={EditUser} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
