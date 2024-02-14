import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormTour } from '../../interfaces'
import tourServices from './tour.services'

class CreateTourCommandHandler {
  private _queryClient
  private _createTourMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._createTourMutation = useMutation({
      mutationFn: (body: FormTour) => tourServices.createTour(body)
    })
  }

  handle = async (tour: FormTour, handleSuccess: any, handleError: any) => {
    await this._createTourMutation.mutateAsync(tour, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['tours']
        })
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }

  isLoading() {
    return this._createTourMutation.isLoading
  }
}
export { CreateTourCommandHandler }
