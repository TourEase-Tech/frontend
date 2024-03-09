import { FormSignInSchema } from './signIn_rules'
import * as yup from 'yup'

export const FormForgetPasswordSchema = FormSignInSchema.omit(['password'])

export type FormForgetPasswordType = yup.InferType<typeof FormForgetPasswordSchema>
