import * as yup from 'yup'

export const FormLoginSchema = yup.object({
  userNameOrEmail: yup.string().required('Email is required'),
  password: yup.string().required('Password is required')
})

export type FormLoginType = yup.InferType<typeof FormLoginSchema>

export const FormRegisterSchema = yup.object({
  userNameOrEmail: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .trim()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup.string().required('Phone is required'),
  gender: yup.string().required('Gender is required')
})

export type FormRegisterType = yup.InferType<typeof FormRegisterSchema>
