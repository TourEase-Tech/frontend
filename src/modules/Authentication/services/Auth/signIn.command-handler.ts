import { useMutation } from '@tanstack/react-query'
import authServices from './auth.services'
import { FormSignInType } from '../../utils'

class SignInCommandHandler {
  private _signInMutation
  constructor() {
    this._signInMutation = useMutation({
      mutationFn: (body: FormSignInType) => authServices.signIn(body)
    })
  }

  handle = (data: FormSignInType, handleSuccess: any, handleError: any) => {
    return this._signInMutation.mutate(data, {
      onSuccess: () => {
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }

  isLoading() {
    return this._signInMutation.isPending
  }
}

export { SignInCommandHandler }
