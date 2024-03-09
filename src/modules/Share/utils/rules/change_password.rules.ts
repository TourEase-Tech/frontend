import * as yup from 'yup'

export const FormChangePasswordSchema = yup.object({
  currentPassword: yup
    .string()
    .trim()
    .required('Please enter your current password')
    .min(6, 'Current password must be at least 6 characters !'),
  newPassword: yup
    .string()
    .trim()
    .required('Please enter your new password')
    .min(6, 'New password must be at least 6 characters !')
    .max(32, 'Password must be at most 32 characters'),
  confirmPassword: yup
    .string()
    .trim()
    .required('Confirm Password is required')
    .oneOf([yup.ref('newPassword')], 'Confirm Password is not match')
})

export type FormChangePasswordType = yup.InferType<typeof FormChangePasswordSchema>
