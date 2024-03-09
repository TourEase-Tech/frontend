import { useQueryParams } from 'src/modules/Share/hooks'
import { TourSearchConfig } from '../interfaces'
import { isUndefined, omitBy } from 'lodash'

export type QuerySearchTourConfig = {
  [key in keyof TourSearchConfig]: any
}

const useQuerySearchTourConfig = () => {
  const querySearchTourParams: QuerySearchTourConfig = useQueryParams()
  const querySearchTourConfig: QuerySearchTourConfig = omitBy(
    {
      destination: querySearchTourParams.destination,
      period: querySearchTourParams.period,
      departureLocation: querySearchTourParams.departureLocation,
      maxPrice: querySearchTourParams.maxPrice,
      minPrice: querySearchTourParams.minPrice,
      page: querySearchTourParams.page || 1,
      limit: querySearchTourParams.limit || 10
    },
    isUndefined
  )
  return querySearchTourConfig
}

export default useQuerySearchTourConfig
