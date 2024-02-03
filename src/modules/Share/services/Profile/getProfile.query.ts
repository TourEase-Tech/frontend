import { useQuery } from '@tanstack/react-query'
import profileServices from './profile.services'
import { ProfileData } from '../../interfaces'

class GetProfileQuery {
  private _query

  constructor(isAuthenticated: boolean) {
    this._query = useQuery({
      queryKey: ['profile'],
      queryFn: () => profileServices.getProfile(),
      enabled: isAuthenticated
    })
  }

  fetch() {
    return this._query.data?.data as ProfileData
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetProfileQuery }
