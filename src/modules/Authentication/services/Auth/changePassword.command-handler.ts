import { useMutation } from '@tanstack/react-query'
import authServices from './auth.services'
import { FormChangePasswordType } from 'src/modules/Share/utils'

class ChangePasswordCommandHanlder {
  private _changePasswordMutation

  constructor() {
    this._changePasswordMutation = useMutation({
      mutationFn: (body: FormChangePasswordType) => authServices.changePassword(body)
    })
  }

  handle = (body: FormChangePasswordType, handleSuccess: any, handleError: any) => {
    return this._changePasswordMutation.mutate(body, {
      onSuccess: () => {
        handleSuccess()
      },
      onError: (err: any) => {
        handleError(err)
      }
    })
  }
  isLoading() {
    return this._changePasswordMutation.isLoading
  }
}

export { ChangePasswordCommandHanlder }
