/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import useQueryTourConfig from '../../hooks/useQueryTourConfig'
import tourServices from './tour.services'
import { TourListConfig, ToursListType } from '../../interfaces'

class GetAllToursQuery {
  private _query
  private _queryTourConfig

  constructor() {
    this._queryTourConfig = useQueryTourConfig()
    this._query = useQuery({
      queryKey: ['tours', this._queryTourConfig],
      queryFn: () => tourServices.getAllTours(this._queryTourConfig as TourListConfig),
      keepPreviousData: true,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data as ToursListType
  }

  getTotal() {
    return this._query.data?.data.total as number
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetAllToursQuery }
