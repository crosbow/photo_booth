import { use } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivetRoute = () => {
  const { accessToken } = use(AuthContext);

  if (accessToken) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};
export default PrivetRoute;
