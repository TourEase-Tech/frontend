import { Fragment, useEffect } from 'react'
import { FormProfileType } from '../../utils'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import { ProfileData } from '../../interfaces'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import Button from '../Button'
interface Props {
  setValue: UseFormSetValue<FormProfileType>
  control: Control<FormProfileType>
  profile: ProfileData
  isLoading: boolean
}
const ProfileInfo = ({ setValue, control, profile, isLoading }: Props) => {
  useEffect(() => {
    if (profile) {
      setValue('email', profile.data.email)
      setValue('firstname', profile.data.firstname)
      setValue('lastname', profile.data.lastname)
      setValue('address', profile.data.address)
      setValue('phonenumber', profile.data.phonenumber)
      setValue('gender', profile.data.gender)
    }
  }, [profile, setValue])

  const handleResetClick = () => {
    if (profile) {
      setValue('email', profile.data.email)
      setValue('firstname', profile.data.firstname)
      setValue('lastname', profile.data.lastname)
      setValue('address', profile.data.address)
      setValue('phonenumber', profile.data.phonenumber)
      setValue('gender', profile.data.gender)
    }
  }
  return (
    <Fragment>
      <div className='grid grid-cols-3 gap-8 items-center '>
        <div className='col-span-1'>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = profile && profile.data.email }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='email'
                    label='Email'
                    value={value}
                    placeholder='Enter your email address'
                    className='w-full bg-white'
                    onChange={onChange}
                    InputProps={{
                      disabled: true
                    }}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
        <div className='col-span-1'>
          <Controller
            name='firstname'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = profile && profile.data.firstname }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='firstname'
                    label='First name'
                    value={value}
                    placeholder='Enter your first name'
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
        <div className='col-span-1'>
          <Controller
            name='lastname'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = profile && profile.data.lastname }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='lastname'
                    label='Last name'
                    value={value}
                    placeholder='Enter your last name'
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
        <div className='col-span-1'>
          <Controller
            name='phonenumber'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = profile && profile.data.phonenumber }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='phonenumber'
                    label='Phone number'
                    value={value}
                    placeholder='Enter your phone number '
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
        <div className='col-span-1'>
          <Controller
            name='address'
            control={control}
            defaultValue=''
            render={({ field: { onChange, value = profile && profile.data.address }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <TextField
                    id='address'
                    label='Address'
                    value={value}
                    placeholder='Enter your address'
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
        <div className='col-span-1'>
          <Controller
            name='gender'
            control={control}
            render={({ field: { onChange, value = profile && profile.data.gender }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <RadioGroup name='gender' value={value} onChange={onChange} row>
                    <FormControlLabel value={false} control={<Radio />} label='Female' />
                    <FormControlLabel value={true} control={<Radio />} label='Male' />
                  </RadioGroup>
                  <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
      </div>
      <div className='flex justify-end gap-6 mt-2'>
        <Button
          type='button'
          classNameButton='bg-red-500 py-2 px-4 rounded-lg text-[16px] text-white font-semibold'
          onClick={handleResetClick}
        >
          Reset
        </Button>
        <Button
          classNameButton='bg-[#26C6DA] py-2 px-4 rounded-lg text-[14px] text-white font-semibold w-[120px]'
          isLoading={isLoading}
        >
          Save
        </Button>
      </div>
    </Fragment>
  )
}

export default ProfileInfo
