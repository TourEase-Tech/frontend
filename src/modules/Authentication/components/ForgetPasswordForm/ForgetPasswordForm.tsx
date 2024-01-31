import { Fragment } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import Button from 'src/modules/Share/components/Button'
import { FormForgetPasswordType } from '../../utils'
import InputAuthentication from '../InputAuthentication'

interface Props {
  register: UseFormRegister<FormForgetPasswordType>
  errors: FieldErrors<FormForgetPasswordType>
}
const ForgetPasswordForm = ({ register, errors }: Props) => {
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
        <Button
          type='submit'
          classNameButton='bg-[#00c1fe] text-[#000000] border border-solid border-[#00c1fe]  flex justify-center items-center text-[14px] text-center h-[30px] font-bold'
        >
          Submit
        </Button>
      </div>
    </Fragment>
  )
}

export default ForgetPasswordForm
