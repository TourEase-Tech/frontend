import http from 'src/modules/Share/utils/http'
import { FormSignInType, FormSignUpType } from '../../utils'
import { AuthResponse } from '../../interfaces'

const authServices = {
  signIn: (body: FormSignInType) => http.post<AuthResponse>('v1/users/login', body),

  signUp: (body: FormSignUpType) => http.post('v1/users/signup', body)
}

export default authServices
