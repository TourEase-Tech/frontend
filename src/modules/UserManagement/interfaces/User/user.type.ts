export interface UsersListType {
  status: string
  results: number
  total: number
  data: UserType
}
export interface UserType {
  data: DataUserType[]
}
export interface DataUserType {
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
