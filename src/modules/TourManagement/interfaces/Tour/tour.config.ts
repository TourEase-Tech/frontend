export interface TourListConfig {
  fields?: string
  sort?: string
  page?: string
  limit?: string
  id?: string
}

export interface TourSearchConfig {
  destination?: string
  period?: string
  departureLocation?: string
  maxPrice?: string
  minPrice?: string
  page?: string
  limit?: string
}
