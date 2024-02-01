import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from '../constants/path'
import { Suspense, lazy, useContext } from 'react'
import HomeLayout from '../layouts/Homelayout'
import AuthenticationLayout from '../layouts/AuthenticationLayout'
import { AppContext } from '../contexts'
import MainLayout from '../layouts/MainLayout'

const HomePage = lazy(() => import('src/modules/Landingpage/pages/HomePage'))
const LoginPage = lazy(() => import('src/modules/Authentication/pages/LoginPage'))
const RegisterPage = lazy(() => import('src/modules/Authentication/pages/RegisterPage'))
const ForgetPasswordPage = lazy(() => import('src/modules/Authentication/pages/ForgetPasswordPage'))

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.dashboard} />
}

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

const useRouteElements = () => {
  const routeElements = useRoutes([
    //Public route
    {
      path: path.home_page,
      element: (
        <HomeLayout>
          <Suspense>
            <HomePage />
          </Suspense>
        </HomeLayout>
      )
    },
    // Rejected routes
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <AuthenticationLayout>
              <Suspense>
                <LoginPage />
              </Suspense>
            </AuthenticationLayout>
          )
        },
        {
          path: path.register,
          element: (
            <AuthenticationLayout>
              <Suspense>
                <RegisterPage />
              </Suspense>
            </AuthenticationLayout>
          )
        },
        {
          path: path.forget_password,
          element: (
            <AuthenticationLayout>
              <Suspense>
                <ForgetPasswordPage />
              </Suspense>
            </AuthenticationLayout>
          )
        }
      ]
    },
    // ProtectedRoute
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.dashboard,
          element: (
            <MainLayout>
              <Suspense>
                <div>Dashboard</div>
              </Suspense>
            </MainLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}

export default useRouteElements
