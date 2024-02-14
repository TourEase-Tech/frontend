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
  tour: '/admin/tours',
  create_tour: '/admin/tours/create',
  edit_tour: '/admin/tours/edit'
} as const

export default path
