import { useSelector } from "react-redux";
import SignUp from "../components/SignUp";
import { isLoadingSelector } from "../store/auth/authSelectors";
import Loader from "../components/Loader/Loader";

const RegistrationPage = () => {
  const isLoading = useSelector(isLoadingSelector);
  return <>{isLoading ? <Loader /> : <SignUp />}</>;
};

export default RegistrationPage;
