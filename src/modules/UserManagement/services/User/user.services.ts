import http from 'src/modules/Share/utils/http'
import { ResponseUsersListType, UsersListConfig } from '../../interfaces'

const userServices = {
  getAllUsers: (params: UsersListConfig) => http.get<ResponseUsersListType>('v1/users/', { params }),

  unlockOrLockUser: (id: string) => http.patch(`v1/users/lockOrUnlockAccount/${id}`)
}
export default userServices
