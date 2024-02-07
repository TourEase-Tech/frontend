/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import userServices from './user.services'

class UnlockOrLockUserCommandHandler {
  private _queryClient
  private _unlockOrLockUserMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._unlockOrLockUserMutation = useMutation({
      mutationFn: (id: string) => userServices.unlockOrLockUser(id)
    })
  }

  handle = (id: string, handleSuccess: any, handleError: any) => {
    return this._unlockOrLockUserMutation.mutate(id, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['profile']
        })
        this._queryClient.invalidateQueries({
          queryKey: ['users']
        })
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }
}

export { UnlockOrLockUserCommandHandler }
