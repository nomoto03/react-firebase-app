import { Navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

type Props = {
  children?: React.ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
