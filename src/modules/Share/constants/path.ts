const path = {
  //Client
  home_page: '/',
  login: '/login',
  register: '/register',
  //Auth
  forget_password: '/forgetPassword',
  reset_password: '/resetPassword',
  //Admin
  admin_login: '/admin/login',
  dashboard: '/admin/dashboard',
  user: '/admin/users'
} as const

export default path
