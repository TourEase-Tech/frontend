import { Fragment, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import Button from 'src/modules/Share/components/Button'
import { FormSignInType } from '../../utils'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import 'dayjs/locale/de'

interface Props {
  control: Control<FormSignInType>
}

const LoginForm = ({ control }: Props) => {
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
        <Button
          type='submit'
          classNameButton='bg-[#00c1fe] text-[#000000] border border-solid border-[#00c1fe] mb-6 flex justify-center items-center text-[14px] text-center h-[55px] font-bold'
        >
          Login
        </Button>
      </div>
    </Fragment>
  )
}

export default LoginForm
