import { useNavigate } from "react-router-dom";
import { SignoutCallbackComponent } from "redux-oidc";
import userManager from "../../Store/userManager";
import Loader from "../Loader/Loader";

const SignOutCallbackPage = () => {
  const navigate = useNavigate();

  const successCallback = (response) => {
    userManager.removeUser();
    localStorage.clear();
    userManager.clearStaleState();
    userManager.signinRedirect({ data: { path: "/" } });
  };

  const errorCallback = (error) => {
    navigate('/');
  };

  return (
    <SignoutCallbackComponent userManager={userManager} successCallback={successCallback} errorCallback={errorCallback}>
       <Loader loading={true} /> 
    </SignoutCallbackComponent>
  )
};

export default SignOutCallbackPage;
