const path = {
  //Client
  home_page: '/',
  tour_client: '/tours',
  tour_detail: '/tours/detail',
  login: '/login',
  register: '/register',
  myfavorite: '/myfavorite',
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
