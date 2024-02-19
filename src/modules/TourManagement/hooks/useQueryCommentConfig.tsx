import { useQueryParams } from 'src/modules/Share/hooks'
import { CommentOfTourConfig } from '../interfaces'
import { isUndefined, omitBy } from 'lodash'

export type QueryCommentConfig = {
  [key in keyof CommentOfTourConfig]: any
}
const useQueryCommentConfig = () => {
  const queryCommentParams: QueryCommentConfig = useQueryParams()
  const queryCommentConfig: QueryCommentConfig = omitBy(
    {
      limit: queryCommentParams.limit || 10,
      page: queryCommentParams.page || 1
    },
    isUndefined
  )
  return queryCommentConfig
}

export default useQueryCommentConfig
