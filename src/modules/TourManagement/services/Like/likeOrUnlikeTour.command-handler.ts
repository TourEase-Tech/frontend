import { useMutation, useQueryClient } from '@tanstack/react-query'
import likeServices from './like.services'
import { FormLike } from '../../interfaces'

class LikeOrUnlikeTourCommandHandler {
  private _queryClient
  private _likeOrUnlikeTourMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._likeOrUnlikeTourMutation = useMutation({
      mutationFn: (body: FormLike) => likeServices.likeOrUnlikeTour(body)
    })
  }

  handle = (body: { tour: string; action: string }, handleSuccess: any, handleError: any) => {
    return this._likeOrUnlikeTourMutation.mutate(body, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['tours']
        })
        this._queryClient.invalidateQueries({
          queryKey: ['tour']
        })
        this._queryClient.invalidateQueries({
          queryKey: ['myFavorite']
        })
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }
  isLoading() {
    return this._likeOrUnlikeTourMutation.isLoading
  }
}
export { LikeOrUnlikeTourCommandHandler }
