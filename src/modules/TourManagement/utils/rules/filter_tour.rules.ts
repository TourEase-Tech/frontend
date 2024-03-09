import * as yup from 'yup'

export const FormFilterTourSchema = yup.object({
  destination: yup.string().trim(),
  period: yup.string().trim(),
  departureLocation: yup.string().trim(),
  maxPrice: yup.string().min(0),
  minPrice: yup.string().min(0)
})

export type FormFilterTourType = yup.InferType<typeof FormFilterTourSchema>
