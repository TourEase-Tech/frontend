import http from 'src/modules/Share/utils/http'
import { FormForgetPasswordType, FormSignInType, FormSignUpType } from '../../utils'
import { AuthResponse } from '../../interfaces'
import { FormChangePasswordType } from 'src/modules/Share/utils'

const authServices = {
  signIn: (body: FormSignInType) => http.post<AuthResponse>('v1/users/login', body),

  signUp: (body: FormSignUpType) => http.post('v1/users/signup', body),

  changePassword: (body: FormChangePasswordType) => http.patch('v1/users/changePassword', body),

  resetPassword: (body: FormForgetPasswordType) => http.post('v1/users/forgotPassword', body)
}

export default authServices
