import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

function ProtectedRoute() {
  // const isAuthenticate = localStorage.getItem("TOKEN_DA");

  // return isAuthenticate ? <Outlet /> : <Navigate replace to="/login" />;
  return <Outlet />;
}

export default ProtectedRoute;
