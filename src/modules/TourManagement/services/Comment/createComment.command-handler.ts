import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormComment } from '../../interfaces'
import commentServices from './comment.services'

class CreateCommentCommandHandler {
  private _queryClient
  private _createCommentMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._createCommentMutation = useMutation({
      mutationFn: (body: FormComment) => commentServices.createCommentOfTour(body)
    })
  }

  handle = (body: FormComment, handleSuccess: any, handleError: any) => {
    this._createCommentMutation.mutate(body, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['comments']
        })
        this._queryClient.invalidateQueries({
          queryKey: ['tour']
        })
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }

  isLoading() {
    return this._createCommentMutation.isLoading
  }
}

export { CreateCommentCommandHandler }
