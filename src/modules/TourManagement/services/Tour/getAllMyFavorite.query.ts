import { useQuery } from '@tanstack/react-query'
import tourServices from './tour.services'
import { DataMyFavoriteType } from '../../interfaces'

class GetAllMyFavoriteQuery {
  private _query

  constructor() {
    this._query = useQuery({
      queryKey: ['myFavorite'],
      queryFn: () => tourServices.getMyFavorite(),
      keepPreviousData: true,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data.data as DataMyFavoriteType[]
  }
}

export { GetAllMyFavoriteQuery }
