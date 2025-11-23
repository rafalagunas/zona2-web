import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import OrganizersLanding from './screens/OrganizersLanding'
import Login from './pages/private/login/Login'
import VerifyOTP from './pages/private/login/verify-otp/VerifyOTP'
import ForgetPassword from './pages/public/forget-password/ForgetPassword'
import VerifyRecoveryCode from './pages/public/forget-password/verify-recovery-code/VerifyRecoveryCode'
import ResetPassword from './pages/private/reset-password/ResetPassword'
import Establishments from './pages/public/establishments/Establishments'
import AuthGuard from './guards/auth.guard'
import RouteProtector from './pages/private/RouteProtector'
import { PrivateRoutes } from './models/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage  />} />
        <Route path="/organizadores" element={<OrganizersLanding />} />
        <Route path="/establishments" element={<Establishments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-recovery-code" element={<VerifyRecoveryCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<AuthGuard privateValidation={true} />}>
          <Route path={`/${PrivateRoutes.HOME}/*`} element={<RouteProtector />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

