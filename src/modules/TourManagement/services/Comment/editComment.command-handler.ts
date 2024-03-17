import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EditFormComment } from '../../interfaces'
import commentServices from './comment.services'

class EditCommentCommandHandler {
  private _queryClient
  private _editCommentMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._editCommentMutation = useMutation({
      mutationFn: (body: EditFormComment) => commentServices.editCommentOfTour(body)
    })
  }

  handle = async (body: EditFormComment, handleSuccess: any, handleError: any) => {
    this._editCommentMutation.mutate(body, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['comment']
        })
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
    return this._editCommentMutation.isLoading
  }
}

export { EditCommentCommandHandler }
