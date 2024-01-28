import { Fragment, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import Button from 'src/modules/Share/components/Button'
import { FormLoginType } from '../../utils/rules'
import InputAuthentication from '../InputAuthentication'

interface Props {
  register: UseFormRegister<FormLoginType>
  errors: FieldErrors<FormLoginType>
}
const LoginForm = ({ register, errors }: Props) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)

  return (
    <Fragment>
      <div className='px-6 sm:px-8 sm:w-[520px] flex justify-center flex-col m-auto w-full'>
        <div className='flex flex-col gap-2'>
          <span>Email</span>
          <InputAuthentication
            register={register}
            type='email'
            id='email'
            name='email'
            placeholder='Provide your email address'
            className='flex flex-col mb-4'
            classNameInput='bg-transparent px-4 py-0 h-12 border border-solid border-[#e1e1e1] focus:outline-none '
            error={errors.userNameOrEmail?.message}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <span>Password</span>
          <InputAuthentication
            register={register}
            type={isHiddenPassword ? 'password' : 'text'}
            id='password'
            name='password'
            placeholder='Enter your password'
            className='flex flex-col relative'
            classNameInput='bg-transparent px-4 py-0 h-12 border border-solid border-[#e1e1e1] focus:outline-none '
            error={errors.password?.message}
          >
            {isHiddenPassword ? (
              <Button
                type='button'
                classNameButton='absolute right-[4px] top-[8px] cursor-pointer px-2 py-1'
                onClick={() => setIsHiddenPassword(!isHiddenPassword)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                  />
                </svg>
              </Button>
            ) : (
              <Button
                type='button'
                classNameButton='absolute right-[4px] top-[8px] cursor-pointer px-2 py-1 '
                onClick={() => setIsHiddenPassword(!isHiddenPassword)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </Button>
            )}
          </InputAuthentication>
        </div>
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
