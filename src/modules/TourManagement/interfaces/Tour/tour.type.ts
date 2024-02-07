export interface ToursListType {
  status: string
  results: number
  total: number
  data: TourType
}

export interface TourType {
  data: DataTourType[]
}

export interface DataTourType {
  _id: string
  name: string
  description: string
  price: string
  departureLocation: string
  period: string
  images: never[]
  destination: string
  departureDay: string
  createdAt: string
  numLikes: number
  id: string
}
