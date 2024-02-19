export interface CommentListType {
  status: string
  results: number
  total: number
  data: CommentType
}
export interface CommentType {
  data: DataCommentType[]
}
export interface DataCommentType {
  _id: string
  content: string
  user: {
    _id: string
    firstname: string
    lastname: string
  }
  tour: string
  createdAt: string
}

export interface FormComment {
  tour?: string
  content: string
}

export interface EditFormComment {
  commentId?: string
  content: string
}
