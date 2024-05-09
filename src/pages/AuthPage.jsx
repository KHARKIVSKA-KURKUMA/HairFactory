import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; // Import Navigate for redirection

import { getUserRole } from "../store/auth/authSelectors";

const AuthPage = () => {
  const role = useSelector(getUserRole);
  const redirectTo = (role) => {
    switch (role) {
      case "master":
        return "/master";
      case "client":
        return "/client";
      default:
        return "/client";
    }
  };
  const redirectPath = redirectTo(role);
  return <Navigate to={redirectPath} replace />;
};

export default AuthPage;
