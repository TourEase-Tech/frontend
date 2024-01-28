import { useRoutes } from 'react-router-dom'
import path from '../constants/path'
import { Suspense, lazy } from 'react'
import HomeLayout from '../layouts/Homelayout'
import AuthenticationLayout from '../layouts/AuthenticationLayout'

const HomePage = lazy(() => import('src/modules/Landingpage/pages/HomePage'))
const LoginPage = lazy(() => import('src/modules/Authentication/pages/LoginPage'))
const RegisterPage = lazy(() => import('src/modules/Authentication/pages/RegisterPage'))
const useRouteElements = () => {
  const routeElements = useRoutes([
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
    }
  ])
  return routeElements
}

export default useRouteElements
