export interface ProfileData {
  status: string
  data: Profile
}

export interface Profile {
  _id: string
  firstname: string
  lastname: string
  email: string
  phonenumber: string
  role: string
  gender: boolean
  address: string
  isActived: boolean
  createdAt: string
  id: string
}
