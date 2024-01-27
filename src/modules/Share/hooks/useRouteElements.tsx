import { useRoutes } from 'react-router-dom'
import path from '../constants/path'
import HomeLayout from '../layouts/Homelayout'
import { Suspense, lazy } from 'react'
import AuthenticationLayout from '../layouts/AuthenticationLayout'

const HomePage = lazy(() => import('src/modules/Landingpage/pages/HomePage'))

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
            <div>Login</div>
          </Suspense>
        </AuthenticationLayout>
      )
    },
    {
      path: path.register,
      element: (
        <AuthenticationLayout>
          <Suspense>
            <div>Register</div>
          </Suspense>
        </AuthenticationLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
