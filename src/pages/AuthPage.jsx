import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../store/auth/authSelectors";
import { useEffect } from "react";
import { fetchCurrentUser } from "../store/auth/authThunks";

const AuthPage = () => {
  const role = useSelector(getUserRole);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
