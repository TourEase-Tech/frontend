import { useMutation } from '@tanstack/react-query'
import authServices from './auth.services'
import { FormSignUpType } from '../../utils'

class SignUpCommandHandler {
  private _signUpMutation
  constructor() {
    this._signUpMutation = useMutation({
      mutationFn: (body: FormSignUpType) => authServices.signUp(body)
    })
  }
  handler = (data: FormSignUpType, handlerSuccess: any, handlerError: any) => {
    return this._signUpMutation.mutate(data, {
      onSuccess: () => {
        handlerSuccess()
      },
      onError: (error: any) => {
        handlerError(error)
      }
    })
  }

  isLoading() {
    return this._signUpMutation.isPending
  }
}
export { SignUpCommandHandler }
