import * as yup from 'yup'

export const FormTourSchema = yup.object({
  name: yup.string().trim().required('Name is required').min(6, 'Name must be at least 6 characters'),
  description: yup
    .string()
    .trim()
    .required('Description is required')
    .min(256, 'Description must be at least 256 characters'),
  price: yup
    .string()
    .trim()
    .required('Price is required')
    .matches(/^[0-9]+$/, 'Price must be a number'),
  departureLocation: yup.string().trim().required('Departure location is required'),
  period: yup.string().trim().required('Period is required'),
  destination: yup.string().trim().required('Destination is required'),
  departureDay: yup
    .string()
    .trim()
    .required('Departure day is required')
    .test('is-future', 'Departure day must be in the future', function (startAt) {
      const startDate = new Date(startAt)
      const now = new Date()
      const minStartDate = new Date(now.getTime() + 24 * 60 * 60 * 1000)
      return startDate > minStartDate
    }),
  images: yup.string().required('Image is required')
})

export type FormTourType = yup.InferType<typeof FormTourSchema>
