import { useQuery } from '@tanstack/react-query'
import tourServices from './tour.services'
import { DataTourType } from '../../interfaces'

class GetTourByIdQuery {
  private _query

  constructor(id: string) {
    this._query = useQuery({
      queryKey: ['tour', id],
      queryFn: () => tourServices.getDetailTour(id),
      enabled: id !== undefined,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data.data as unknown as DataTourType
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetTourByIdQuery }
