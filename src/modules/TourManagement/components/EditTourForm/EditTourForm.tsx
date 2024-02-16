import { Fragment, useEffect } from 'react'
import { Control, Controller, FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { FormTourType } from '../../utils'
import { DataTourType } from '../../interfaces'
import Input from 'src/modules/Share/components/Input'
import InputMainImageTour from 'src/modules/Share/components/InputMainImageTour'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
interface Props {
  register: UseFormRegister<FormTourType>
  previewImage: string
  setValue: UseFormSetValue<FormTourType>
  control: Control<FormTourType>
  tour: DataTourType
  onChange: any
  errors: FieldErrors<FormTourType>
}
const EditTourForm = ({ register, previewImage, onChange, errors, setValue, control, tour }: Props) => {
  useEffect(() => {
    if (tour) {
      setValue('name', tour.name)
      setValue('destination', tour.destination)
      setValue('images', tour.images)
      setValue('departureLocation', tour.departureLocation)
      setValue('period', tour.period)
      setValue('price', tour.price)
      setValue('departureDay', tour.departureDay)
      setValue('description', tour.description)
    }
  }, [tour, setValue])

  return (
    <Fragment>
      <div className='grid grid-cols-7 gap-4 mx-6'>
        <div className='col-span-7 grid grid-cols-2 '>
          <Input
            register={register}
            id='name'
            name='name'
            placeholder='Tour name'
            className='col-span-2'
            classNameInput='w-full text-[#195E8E] text-[42px] font-bold placeholder:text-[42px] placeholder:text-[#195E8E] placeholder-bold bg-transparent outline-none'
            error={errors.name?.message}
          />
          <Input
            register={register}
            id='destination'
            name='destination'
            placeholder='Destination'
            className='col-span-2'
            classNameInput='w-full text-black/90 text-[16px] placeholder:text-black/90 bg-transparent outline-none h-[28px]'
            error={errors.destination?.message}
          />
        </div>
        <div className='col-span-7'>
          <InputMainImageTour
            register={register}
            onChange={onChange}
            previewImage={previewImage}
            avatar={tour && tour.images}
          />
        </div>
        <div className='col-span-7 grid grid-cols-2 gap-x-4 text-[14px] font-semibold text-gray-600 placeholder:text-black'>
          <Controller
            name='departureLocation'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = tour && tour.departureDay }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='departureLocation'
                    label='Departure Location'
                    value={value}
                    placeholder='Enter Location: Ex: Hanoi, Vietnam'
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
          <Controller
            name='period'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = tour && tour.period }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='period'
                    label='Period'
                    value={value}
                    placeholder='Enter Period'
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
          <Controller
            name='price'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = tour && tour.price }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='pt-[8px]'>
                  <TextField
                    id='price'
                    label='Price'
                    placeholder='Enter price'
                    value={value}
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
          <Controller
            name={'departureDay'}
            control={control}
            render={({ field: { onChange, value = tour && tour.departureDay }, fieldState: { error } }) => (
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimeField']}>
                    <DateTimePicker
                      label='Departure Day'
                      format='DD/MM/YYYY HH:mm'
                      onChange={onChange}
                      value={tour ? dayjs(value) : value !== undefined ? dayjs(value) : null}
                      className='bg-white'
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>
                  {error && error.message}
                  {errors.departureDay?.message}
                </span>
              </div>
            )}
          />
          <Controller
            name='description'
            defaultValue=''
            control={control}
            render={({ field: { onChange, value = tour && tour.description }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='col-span-2'>
                  <TextField
                    id='description'
                    label='Description'
                    value={value}
                    placeholder='Enter Description'
                    className='w-full bg-white '
                    multiline
                    rows={8}
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default EditTourForm
