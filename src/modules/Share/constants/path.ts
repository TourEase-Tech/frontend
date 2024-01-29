const path = {
  //Client
  home_page: '/frontend/',
  login: '/frontend/login',
  register: '/frontend/register',
  //Auth
  forget_password: '/frontend/forgetPassword',
  reset_password: '/frontend/resetPassword',
  //Admin
  admin_login: '/frontend/admin/login',
  dashboard: '/frontend/admin/dashboard',
  user: '/frontend/admin/users'
} as const

export default path
