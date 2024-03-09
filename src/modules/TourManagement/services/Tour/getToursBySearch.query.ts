import { useQuery } from '@tanstack/react-query'
import { QuerySearchTourConfig } from '../../hooks/useQuerySearchTourConfig'
import tourServices from './tour.services'
import { DataTourType } from '../../interfaces'

class GetToursBySearchQuery {
  private _query
  private _querySearchTourConfig

  constructor(querySearchTourConfig: QuerySearchTourConfig) {
    this._querySearchTourConfig = querySearchTourConfig
    this._query = useQuery({
      queryKey: ['tours', this._querySearchTourConfig],
      queryFn: () => tourServices.getToursBySearch(this._querySearchTourConfig),
      keepPreviousData: true,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data.data as DataTourType[]
  }

  getTotal() {
    return this._query.data?.data.total as number
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetToursBySearchQuery }
