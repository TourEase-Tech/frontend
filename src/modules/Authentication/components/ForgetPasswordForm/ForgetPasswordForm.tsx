import { Fragment } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import Button from 'src/modules/Share/components/Button'
import { FormForgetPasswordType } from '../../utils'
import InputAuthentication from '../InputAuthentication'
import { Link } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'

interface Props {
  register: UseFormRegister<FormForgetPasswordType>
  errors: FieldErrors<FormForgetPasswordType>
  isLoading: boolean
}
const ForgetPasswordForm = ({ register, errors, isLoading }: Props) => {
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
            error={errors.email?.message}
          />
        </div>
        <div className='flex justify-end gap-2'>
          <Link
            to={path.login}
            className='flex justify-center items-center bg-[#195E8E] md:w-[60px] md:h-[50px] max-md:w-[40px] max-md:h-[30px] text-white lg:p-2 md:rounded-2xl max-md:rounded-xl font-semibold md:hover:w-[70px] max-md:hover:w-[50px] hover:bg-[#dd5353] transition-all duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3 m-0'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
              />
            </svg>
          </Link>
          <Button
            type='submit'
            classNameButton='flex justify-center items-center bg-[#195E8E] md:w-[70px] md:h-[50px] max-md:w-[40px] max-md:h-[30px] text-white p-2 md:rounded-2xl max-md:rounded-xl font-semibold transition-all duration-300 hover:bg-[#195E8E]/80'
            isLoading={isLoading}
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
      </div>
    </Fragment>
  )
}

export default ForgetPasswordForm
