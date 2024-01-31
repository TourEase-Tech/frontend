import { useMutation } from '@tanstack/react-query'
import { FormSignInType } from '../../utils'
import authServices from './auth.services'

class SignInCommandHandler {
  private _signInMutation
  constructor() {
    this._signInMutation = useMutation({
      mutationFn: (body: FormSignInType) => authServices.signIn(body)
    })
  }
  handler = (data: FormSignInType, handlerSuccess: any, handlerError: any) => {
    return this._signInMutation.mutate(data, {
      onSuccess: () => {
        handlerSuccess()
      },
      onError: (error: any) => {
        handlerError(error)
      }
    })
  }
}

export { SignInCommandHandler }
