import CreateBlog from "../app/page/CreateBlog";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "aws-amplify";
const useAuth = async () => {
  const user = {
    loggedIn: localStorage.getItem("auth"),
  };
  return user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth != null ? <Outlet /> : <Navigate to="/create" />;
};

export default ProtectedRoutes;
