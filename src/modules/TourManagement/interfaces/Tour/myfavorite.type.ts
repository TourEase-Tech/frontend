import { DataTourType } from './tour.type'

export interface MyFavoriteListType {
  status: string
  results: number
  total: number
  data: DataMyFavoriteType[]
}

export interface DataMyFavoriteType {
  _id: string
  user: DataUserType
  tour: DataTourType
  createdAt: string
}

export interface DataUserType {
  firstname: string
  lastname: string
  id: string
}
