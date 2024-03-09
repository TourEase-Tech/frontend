/* eslint-disable react-hooks/rules-of-hooks */
import useQueryUserConfig from '../../hooks/useQueryUserConfig'
import userServices from './user.services'
import { DataUserType, UsersListConfig } from '../../interfaces'
import { useQuery } from '@tanstack/react-query'

class GetAllUsersQuery {
  private _query
  private _queryUserConfig

  constructor() {
    this._queryUserConfig = useQueryUserConfig()
    this._query = useQuery({
      queryKey: ['users', this._queryUserConfig],
      queryFn: () => userServices.getAllUsers(this._queryUserConfig as UsersListConfig),
      keepPreviousData: true,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data.data.data as DataUserType[]
  }

  getTotal() {
    return this._query.data?.data.total as number
  }

  isLoading() {
    return this._query.isLoading
  }
}
export { GetAllUsersQuery }
