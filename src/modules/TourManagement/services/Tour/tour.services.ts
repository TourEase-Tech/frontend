import http from 'src/modules/Share/utils/http'
import {
  TourType,
  FormTour,
  TourListConfig,
  ToursListType,
  TourSearchConfig,
  TourSearchListType,
  MyFavoriteListType
} from '../../interfaces'

const tourServices = {
  getAllTours: (params: TourListConfig) => http.get<ToursListType>('v1/tours/getAllTours', { params }),

  getDetailTour: (id: string) => http.get<TourType>(`v1/tours/getDetailTour/${id}`),

  createTour: (body: FormTour) => http.post('v1/tours/createTour', body),

  editTour: (body: FormTour) => http.patch('v1/tours/updateTour', body),

  getToursBySearch: (params: TourSearchConfig) => http.get<TourSearchListType>('v1/tours/searchTour', { params }),

  getMyFavorite: () => http.get<MyFavoriteListType>('v1/tours/getFavoriteTourList')
}
export default tourServices
