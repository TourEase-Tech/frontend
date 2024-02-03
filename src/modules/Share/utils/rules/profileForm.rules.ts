import * as yup from 'yup'

export const FormProfileSchema = yup.object({
  email: yup.string().trim().required('Email is required').email('Invalid email format'),
  phonenumber: yup
    .string()
    .trim()
    .required('Phonenumber is required !')
    .length(10, 'Phonenumber must be 10 characters')
    .matches(/^0[0-9]{9}$/, 'Phonenumber is not valid !'),
  address: yup.string().trim().required('Address is required'),
  firstname: yup.string().trim().required('First name is required !'),
  lastname: yup.string().trim().required('Last name is required !'),
  gender: yup.boolean().required('Gender is required !')
})

export type FormProfileType = yup.InferType<typeof FormProfileSchema>
