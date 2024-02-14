import { Fragment } from 'react'
import { FormTourType } from '../../utils'
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material'
import Input from 'src/modules/Share/components/Input'
import InputMainImageTour from 'src/modules/Share/components/InputMainImageTour'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import { DataTourType } from '../../interfaces'

interface Props {
  register: UseFormRegister<FormTourType>
  previewImage: string
  control: Control<FormTourType>
  onChange: any
  errors: FieldErrors<FormTourType>
  tour?: DataTourType
}
const CreateTourForm = ({ register, onChange, control, errors, tour, previewImage }: Props) => {
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
          <InputMainImageTour register={register} onChange={onChange} previewImage={previewImage} />
        </div>
        <div className='col-span-7 grid grid-cols-2 gap-x-4 text-[14px] font-semibold text-gray-600 placeholder:text-black'>
          <Controller
            name='departureLocation'
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='departureLocation'
                    label='Departure Location'
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
            render={({ field: { onChange }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='period'
                    label='Period'
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
            render={({ field: { onChange }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='pt-[8px]'>
                  <TextField
                    id='price'
                    label='Price'
                    placeholder='Enter price'
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='col-span-2'>
                  <TextField
                    id='description'
                    label='Description'
                    placeholder='Enter Description'
                    className='w-full bg-white '
                    multiline
                    rows={4}
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

export default CreateTourForm
