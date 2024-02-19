import http from 'src/modules/Share/utils/http'
import { FormLike } from '../../interfaces'

const likeServices = {
  likeOrUnlikeTour: (body: FormLike) => http.post('v1/likes/likeOrUnlikeTour', body)
}
export default likeServices
