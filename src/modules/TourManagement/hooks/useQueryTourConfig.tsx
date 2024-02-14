import { useQueryParams } from 'src/modules/Share/hooks'
import { TourListConfig } from '../interfaces'
import { isUndefined, omitBy } from 'lodash'

export type QueryTourConfig = {
  [key in keyof TourListConfig]: any
}

const useQueryTourConfig = () => {
  const queryTourParams: QueryTourConfig = useQueryParams()
  const queryEventConfig: QueryTourConfig = omitBy(
    {
      search: queryTourParams.fields,
      sort: queryTourParams.sort,
      limit: queryTourParams.limit || 10,
      page: queryTourParams.page || 1,
      id: queryTourParams.id
    },
    isUndefined
  )
  return queryEventConfig
}

export default useQueryTourConfig
