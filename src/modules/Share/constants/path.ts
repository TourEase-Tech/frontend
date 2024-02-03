const path = {
  //Client
  home_page: '/',
  login: '/login',
  register: '/register',
  //Auth
  forget_password: '/forgetPassword',
  reset_password: '/resetPassword',
  //Admin
  dashboard: '/admin/dashboard',
  user: '/admin/users',
  tour: '/admin/tours'
} as const

export default path
