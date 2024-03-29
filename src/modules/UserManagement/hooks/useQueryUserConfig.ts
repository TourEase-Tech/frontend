import { useQueryParams } from 'src/modules/Share/hooks'
import { UsersListConfig } from '../interfaces/User'
import { isUndefined, omitBy } from 'lodash'

export type QueryUserConfig = {
  [key in keyof UsersListConfig]: any
}

const useQueryUserConfig = () => {
  const queryUserParams: QueryUserConfig = useQueryParams()
  const queryUserConfig: QueryUserConfig = omitBy(
    {
      search: queryUserParams.fields,
      sort: queryUserParams.sort,
      limit: queryUserParams.limit || 10,
      page: queryUserParams.page || 1
    },
    isUndefined
  )
  return queryUserConfig
}

export default useQueryUserConfig
