import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/Context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if(loading){
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};
export default PrivateRoute;
