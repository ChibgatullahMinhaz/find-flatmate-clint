import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/Context/AuthContext";
import { useContext } from "react";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};
export default PrivateRoute;
