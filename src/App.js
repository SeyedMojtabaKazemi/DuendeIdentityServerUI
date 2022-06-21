import AdminRoute from './Routes/AdminRoute'
import { useEffect, useState } from 'react'
import userManager from './Store/userManager'
import Loader from './Component/Loader/Loader'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import useInitializer from './Hooks/useInitializer'


const App = (props) => {
  const { user, isLoadingUser } = useSelector((rootState) => rootState.oidc);
  const { odicState, userClaims } = useSelector((rootState) => rootState.dashboard);

  const [isLogin, setIsLogin] = useState(false);
  const isConnected = odicState.user && !odicState.user.expired;

  const [initialize] = useInitializer();
  const dispatch = useDispatch();

  useEffect(() => {
    initialize();
  }, [user])

  useEffect(() => {
    if (window.location.pathname !== '/SignInCallback') {
      userManager.getUser()
        .then((user) => {
          if (!user || user.expired) {
            userManager.signinRedirect({
              data: { path: window.location.pathname },
            });
            if (isLogin) {
              setIsLogin(false);
            }
          }
          else {
            //  dispatch(setUserClaims(user.access_token));
            if (!isLogin) {
              setIsLogin(true);
            }
          }
        })
    }
    else {
      if (!isLogin) {
        setIsLogin(true);
      }
    }
  }, [dispatch, isLogin])

  useEffect(() => {
    if (!isConnected && isLogin && !userClaims.isLogOut) {
      userManager.removeUser()
      localStorage.clear()
      userManager.clearStaleState()
      //  dispatch(clearUserClaims())
      userManager.signinRedirect({ data: { path: window.location.pathname } })
    }
  }, [dispatch, isConnected, userClaims.isLogOut]);

  if (isLogin) {
    return (
      <>
        {
          isLoadingUser ? <Loader /> :
            <AdminRoute />
        }
      </>
    )
  } else return <Loader  />
}

export default App;
