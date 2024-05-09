import { useSelector } from "react-redux";
import SignIn from "../components/SignIn";
import { isLoadingSelector } from "../store/auth/authSelectors";
import Loader from "../components/Loader/Loader";

const LoginPage = () => {
  const isLoading = useSelector(isLoadingSelector);
  return <>{isLoading ? <Loader /> : <SignIn />}</>;
};

export default LoginPage;
