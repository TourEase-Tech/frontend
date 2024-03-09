/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import { QueryTourConfig } from '../../hooks/useQueryTourConfig'
import tourServices from './tour.services'
import { DataTourType, TourListConfig } from '../../interfaces'

class GetAllToursQuery {
  private _query
  private _queryTourConfig

  constructor(queryTourConfig: QueryTourConfig) {
    this._queryTourConfig = queryTourConfig
    this._query = useQuery({
      queryKey: ['tours', this._queryTourConfig],
      queryFn: () => tourServices.getAllTours(this._queryTourConfig as TourListConfig),
      keepPreviousData: true,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data.data.data as DataTourType[]
  }

  getTotal() {
    return this._query.data?.data.total as number
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetAllToursQuery }
