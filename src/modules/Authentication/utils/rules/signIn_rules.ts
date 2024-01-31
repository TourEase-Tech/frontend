import * as yup from 'yup'

export const FormSignInSchema = yup.object({
  email: yup.string().trim().required('Email is required'),
  password: yup.string().trim().required('Password is required')
})

export type FormSignInType = yup.InferType<typeof FormSignInSchema>
