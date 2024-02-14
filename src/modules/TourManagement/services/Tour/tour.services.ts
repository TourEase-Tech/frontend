import http from 'src/modules/Share/utils/http'
import { TourType, FormTour, TourListConfig, ToursListType } from '../../interfaces'

const tourServices = {
  getAllTours: (params: TourListConfig) => http.get<ToursListType>('v1/tours/getAllTours', { params }),

  getDetailTour: (id: string) => http.get<TourType>(`v1/tours/getDetailTour/${id}`),

  createTour: (body: FormTour) => http.post('v1/tours/createTour', body)
}
export default tourServices
