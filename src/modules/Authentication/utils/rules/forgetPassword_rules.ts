import * as yup from 'yup'

export const FormForgetPasswordSchema = yup.object({
  email: yup.string().trim().required('Email is required')
})

export type FormForgetPasswordType = yup.InferType<typeof FormForgetPasswordSchema>
