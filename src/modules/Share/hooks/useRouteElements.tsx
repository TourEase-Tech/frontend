import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from '../constants/path'
import { Suspense, lazy, useContext } from 'react'
import { AppContext } from '../contexts'
import HomeLayout from '../layouts/Homelayout'
import AuthenticationLayout from '../layouts/AuthenticationLayout'
import { GetProfileQuery } from '../services'
import MainLayout from '../layouts/MainLayout'

const HomePage = lazy(() => import('src/modules/Landingpage/pages/HomePage'))
const LoginPage = lazy(() => import('src/modules/Authentication/pages/LoginPage'))
const RegisterPage = lazy(() => import('src/modules/Authentication/pages/RegisterPage'))
const ForgetPasswordPage = lazy(() => import('src/modules/Authentication/pages/ForgetPasswordPage'))

// Admin
const DashboardPage = lazy(() => import('src/modules/Dashboard/pages/DashboardPage'))
const UserPage = lazy(() => import('src/modules/UserManagement/pages/UserPage'))
const NotFound = lazy(() => import('src/modules/Share/components/NotFound'))

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.dashboard} />
}

const ProtectedUserRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

const ProtectedAdminRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  const getProfileQuery = new GetProfileQuery(isAuthenticated)
  const role = getProfileQuery.fetch()?.data.role

  if (!getProfileQuery.isLoading()) {
    return role === 'admin' ? <Outlet /> : <Navigate to={path.home_page} />
  }
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
    // Protected User Route
    {
      path: '',
      element: <ProtectedUserRoute />,
      children: [
        {
          path: path.home_page,
          element: (
            <HomeLayout>
              <Suspense>
                <HomePage />
              </Suspense>
            </HomeLayout>
          )
        }
      ]
    },
    // Protected Admin Route
    {
      path: '',
      element: <ProtectedAdminRoute />,
      children: [
        {
          path: path.dashboard,
          element: (
            <MainLayout>
              <Suspense>
                <DashboardPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <Suspense>
                <UserPage />
              </Suspense>
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '*',
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
