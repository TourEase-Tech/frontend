/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import useQueryCommentConfig from '../../hooks/useQueryCommentConfig'
import commentServices from './comment.services'
import { DataCommentType } from '../../interfaces'

class getAllCommentCommandHandler {
  private _query
  private _queryCommentConfig

  constructor(id: string) {
    this._queryCommentConfig = useQueryCommentConfig()
    this._query = useQuery({
      queryKey: ['comments', id],
      queryFn: () => commentServices.getCommentByTourId(id, this._queryCommentConfig),
      keepPreviousData: true,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data.data as DataCommentType[]
  }
}

export { getAllCommentCommandHandler }
