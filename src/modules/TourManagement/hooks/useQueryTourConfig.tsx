import { useQueryParams } from 'src/modules/Share/hooks'
import { TourListConfig } from '../interfaces'
import { isUndefined, omitBy } from 'lodash'

export type QueryTourConfig = {
  [key in keyof TourListConfig]: any
}

const useQueryTourConfig = (limit?: any) => {
  const queryTourParams: QueryTourConfig = useQueryParams()
  const queryTourConfig: QueryTourConfig = omitBy(
    {
      search: queryTourParams.fields,
      sort: queryTourParams.sort,
      limit: queryTourParams.limit || limit || 10,
      page: queryTourParams.page || 1,
      id: queryTourParams.id
    },
    isUndefined
  )
  return queryTourConfig
}

export default useQueryTourConfig
