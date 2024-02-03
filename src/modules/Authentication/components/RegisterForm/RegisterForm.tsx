import { Fragment, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import Button from 'src/modules/Share/components/Button'
import { FormSignUpType } from '../../utils'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FormControlLabel, IconButton, InputAdornment, Radio, RadioGroup, TextField } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

interface Props {
  control: Control<FormSignUpType>
  isLoading: boolean
}
const RegisterForm = ({ control, isLoading }: Props) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)

  const togglePasswordVisibility = () => {
    setIsHiddenPassword(!isHiddenPassword)
  }
  return (
    <Fragment>
      <div className='px-6 sm:px-8 sm:w-[520px] flex justify-center flex-col m-auto w-full'>
        <Controller
          name='email'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <div>
                <TextField
                  id='email'
                  label='Email'
                  placeholder='Provide your email'
                  className='w-full bg-white'
                  onChange={onChange}
                />
                <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
              </div>
            </LocalizationProvider>
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <div>
                <TextField
                  id='password'
                  label='Password'
                  placeholder='Provide your password'
                  type={isHiddenPassword ? 'password' : 'text'} // Sử dụng type 'password' hoặc 'text' tùy thuộc vào trạng thái của isHiddenPassword
                  className='w-full bg-white'
                  onChange={onChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={togglePasswordVisibility} edge='end'>
                          {isHiddenPassword ? <VisibilityOff /> : <Visibility />} {/* Icon hiển thị/ẩn mật khẩu */}
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
          name='confirm_password'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <div>
                <TextField
                  id='confirm_password'
                  label='Confirm password'
                  placeholder='Provide your confirm password'
                  type={isHiddenPassword ? 'password' : 'text'} // Sử dụng type 'password' hoặc 'text' tùy thuộc vào trạng thái của isHiddenPassword
                  className='w-full bg-white'
                  onChange={onChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={togglePasswordVisibility} edge='end'>
                          {isHiddenPassword ? <VisibilityOff /> : <Visibility />} {/* Icon hiển thị/ẩn mật khẩu */}
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
          name='firstname'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <div>
                <TextField
                  id='firstname'
                  label='First name'
                  placeholder='Provide your firstname'
                  className='w-full bg-white'
                  onChange={onChange}
                />
                <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
              </div>
            </LocalizationProvider>
          )}
        />
        <Controller
          name='lastname'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <div>
                <TextField
                  id='lastname'
                  label='Last name'
                  placeholder='Provide your lastname'
                  className='w-full bg-white'
                  onChange={onChange}
                />
                <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
              </div>
            </LocalizationProvider>
          )}
        />
        <Controller
          name='gender'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <RadioGroup aria-label='gender' name='gender' onChange={onChange} row>
                <FormControlLabel value={false} control={<Radio />} label='Female' />
                <FormControlLabel value={true} control={<Radio />} label='Male' />
              </RadioGroup>
              <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </LocalizationProvider>
          )}
        />
        <Controller
          name='phonenumber'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <div>
                <TextField
                  id='phonenumber'
                  label='Phonenumber'
                  placeholder='Provide your phonenumber'
                  className='w-full bg-white'
                  onChange={onChange}
                />
                <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
              </div>
            </LocalizationProvider>
          )}
        />
        <Controller
          name='address'
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <div>
                <TextField
                  id='address'
                  label='Address'
                  placeholder='Provide your address'
                  className='w-full bg-white'
                  onChange={onChange}
                />
                <span className='block min-h-[20px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
              </div>
            </LocalizationProvider>
          )}
        />
        <Button
          type='submit'
          classNameButton='bg-[#00c1fe] text-[#000000] border border-solid border-[#00c1fe] mb-6 flex justify-center items-center text-[14px] text-center h-[55px] font-bold'
          isLoading={isLoading}
        >
          Submit
        </Button>
      </div>
    </Fragment>
  )
}

export default RegisterForm
