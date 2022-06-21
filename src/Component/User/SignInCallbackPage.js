import useInitializer from "../../Hooks/useInitializer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CallbackComponent } from "redux-oidc";
import userManager from "../../Store/userManager";
import Loader from "../Loader/Loader";


const SignInCallbackPage = () => {
  const navigate = useNavigate();
  const [initialize] = useInitializer()
  const { user } = useSelector((rootState) => rootState.oidc)

  const successCallback = () => {
    initialize()
    const redirectPath = user.state.path;
    navigate(redirectPath);
  };

  const errorCallback = (error) => {
    navigate('/', { replace: true });
  };

  return (
    <CallbackComponent userManager={userManager} successCallback={successCallback} errorCallback={errorCallback} >
       <Loader loading={true} /> 
    </CallbackComponent>
  )
};

export default SignInCallbackPage
