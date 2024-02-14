/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Button from '../Button'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash'
import { FormChangePasswordSchema, FormChangePasswordType } from '../../utils'
import { IconButton, Input, InputAdornment, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

interface Props {
  handleCloseModal: () => void
}

const ChangePassword = ({ handleCloseModal }: Props) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)

  const togglePasswordVisibility = () => {
    setIsHiddenPassword(!isHiddenPassword)
  }

  const {
    register,
    control,
    formState: { errors }
  } = useForm<FormChangePasswordType>({
    resolver: yupResolver(FormChangePasswordSchema)
  })

  return (
    <div className='flex flex-col justify-between md:gap-6 max-md:gap-4 items-center bg-white p-6 rounded-lg md:w-[480px] max-md:w-[300px]'>
      <div className='flex justify-between items-center w-full'>
        <h2 className='md:text-[20px] max-md:text-[12px] font-semibold'>Change password</h2>
        <Button classNameButton='p-2 hover:bg-slate-100 rounded-lg' onClick={handleCloseModal}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='md:w-6 md:h-6 max-md:w-5 max-md:h-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </Button>
      </div>
      <form onSubmit={() => {}} className='w-full'>
        <div className='flex flex-col gap-4'>
          <Controller
            name='currentPassword'
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
                <div>
                  <TextField
                    id='currentPassword'
                    label='Current password'
                    placeholder='Provide your current password'
                    type={isHiddenPassword ? 'password' : 'text'}
                    className='w-full bg-white'
                    onChange={onChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={togglePasswordVisibility} edge='end'>
                            {isHiddenPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                  <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
          <Controller
            name='newPassword'
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
                <div>
                  <TextField
                    id='newPassword'
                    label='New password'
                    placeholder='Provide your new password'
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
                <div>
                  <TextField
                    id='confirmPassword'
                    label='Confirm new password'
                    placeholder='Provide your confirm password'
                    className='w-full bg-white'
                    onChange={onChange}
                  />
                  <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
                </div>
              </LocalizationProvider>
            )}
          />
        </div>
        <div className='flex justify-end'>
          <Button
            type='submit'
            classNameButton='flex justify-center items-center bg-[#195E8E] lg:w-[72px] lg:h-[50px] md:w-[60px] md:h-[36px] max-md:w-[48px] max-md:h-[24px] text-white p-2 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#195E8E]/90'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
              />
            </svg>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
