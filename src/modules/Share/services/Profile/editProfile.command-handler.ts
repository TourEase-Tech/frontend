import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormProfileType } from '../../utils'
import profileServices from './profile.services'

class EditProfileCommandHandler {
  private _queryClient
  private _editProfileMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._editProfileMutation = useMutation({
      mutationFn: (data: FormProfileType) => profileServices.editProfile(data)
    })
  }

  handle = (data: FormProfileType, handleSuccess: any, handleError: any) => {
    return this._editProfileMutation.mutate(data, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['profile']
        })
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }

  isLoading() {
    return this._editProfileMutation.isLoading
  }
}

export { EditProfileCommandHandler }
