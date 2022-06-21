import SignInCallbackPage from '../Component/User/SignInCallbackPage'
import SignOutPage from '../Component/User/SignOut'
import SignOutCallbackPage from '../Component/User/SignOutCallbackPage'
import {NotFound} from '../Pages/NotFoundPage/NotFound'
import { Route, Routes } from 'react-router-dom'
import {Dashboard} from '../Pages/DashboardPage/Dashboard'
import { CreateUser } from '../Pages/UserManager/CreateUser'

function AdminRoute() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />
      <Route path="/SignInCallback" element={<SignInCallbackPage />} />
      <Route path="/SignOutCallBack" element={<SignOutCallbackPage />} />
      <Route path="/SignOut" element={<SignOutPage />} />
      <Route path="/CreateUser" element={<CreateUser />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AdminRoute
