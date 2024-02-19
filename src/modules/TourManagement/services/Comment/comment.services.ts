import http from 'src/modules/Share/utils/http'
import { CommentOfTourConfig, CommentType, EditFormComment, FormComment } from '../../interfaces'

const commentServices = {
  getCommentByTourId: (id: string, params: CommentOfTourConfig) =>
    http.get<CommentType>(`v1/comments/getAllCommentByTour/${id}`, { params }),

  createCommentOfTour: (body: FormComment) => http.post('v1/comments/createComment', body),

  editCommentOfTour: (body: EditFormComment) => http.patch('v1/comments/updateComment', body)
}
export default commentServices
