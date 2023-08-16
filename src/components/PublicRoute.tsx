import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = () => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
