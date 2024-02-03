import { ProfileData } from '../../interfaces'
import { FormProfileType } from '../../utils'
import http from '../../utils/http'

const profileServices = {
  getProfile: () => http.get<ProfileData>('/v1/users/me'),

  editProfile: (data: FormProfileType) => http.patch(`/v1/users/updateMe`, data)
}

export default profileServices
