import * as yup from 'yup'

export const FormCommentSchema = yup.object({
  content: yup.string().trim().required('Content is required').min(6, 'Content must be at least 6 characters')
})

export type FormCommentType = yup.InferType<typeof FormCommentSchema>
