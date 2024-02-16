import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormTour } from '../../interfaces'
import tourServices from './tour.services'

class EditTourCommandHandler {
  private _queryClient
  private _editTourMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._editTourMutation = useMutation({
      mutationFn: (body: FormTour) => tourServices.editTour(body)
    })
  }

  handle = async (body: FormTour, handleSuccess: any, handleError: any) => {
    await this._editTourMutation.mutate(body, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['tours']
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
    return this._editTourMutation.isLoading
  }
}

export { EditTourCommandHandler }
