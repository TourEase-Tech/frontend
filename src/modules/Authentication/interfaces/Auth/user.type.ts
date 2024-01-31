type Role = 'user' | 'admin'
export interface User {
  _id: string
  firstname: string
  lastname: string
  email: string
  phonenumber: string
  role: Role
  gender: boolean
  address: string
  isActived: boolean
  createdAt: string
  id: string
}
