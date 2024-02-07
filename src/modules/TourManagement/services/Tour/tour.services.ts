import http from 'src/modules/Share/utils/http'
import { TourListConfig, ToursListType } from '../../interfaces'

const tourServices = {
  getAllTours: (params: TourListConfig) => http.get<ToursListType>('v1/tours/getAllTours', { params })
}
export default tourServices
