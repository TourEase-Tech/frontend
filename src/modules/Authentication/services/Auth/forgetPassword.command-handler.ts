import { useMutation } from '@tanstack/react-query'
import authServices from './auth.services'
import { FormForgetPasswordType } from '../../utils'

class ForgetPasswordCommandHandler {
  private _resetPasswordMutation

  constructor() {
    this._resetPasswordMutation = useMutation({
      mutationFn: (body: FormForgetPasswordType) => authServices.resetPassword(body)
    })
  }

  handle = (data: FormForgetPasswordType, handleSuccess: any, handleError: any) => {
    return this._resetPasswordMutation.mutate(data, {
      onSuccess: () => {
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }

  isLoading() {
    return this._resetPasswordMutation.isLoading
  }
}

export { ForgetPasswordCommandHandler }
