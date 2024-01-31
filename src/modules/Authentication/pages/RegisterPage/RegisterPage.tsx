import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'
import RegisterForm from '../../components/RegisterForm'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSignUpSchema, FormSignUpType } from '../../utils'
import { SignUpCommandHandler } from '../../services'

const RegisterPage = () => {
  const { control, handleSubmit } = useForm<FormSignUpType>({
    resolver: yupResolver(FormSignUpSchema)
  })

  const signUpCommandHandler = new SignUpCommandHandler()

  const handleSubmitForm = handleSubmit((data) => {
    signUpCommandHandler.handler(
      data,
      () => {
        console.log('success')
      },
      (error: any) => {
        console.log(error)
      }
    )
  })
  return (
    <Fragment>
      <Helmet>
        <title>Register</title>
        <meta name='description' content='This is login page of the project' />
      </Helmet>
      <div className='flex flex-col justify-center items-center m-auto w-full sm:w-[520px]  px-6 h-full border mt-10 bg-white rounded-2xl py-10'>
        <Link to={path.home_page} className='text-[32px]'>
          Tourease
        </Link>
        <form onSubmit={handleSubmitForm}>
          <RegisterForm control={control} />
        </form>
        <Link to={path.login} className='flex justify-center text-[#757575] text-[14px] underline'>
          Already have an account?
        </Link>
      </div>
    </Fragment>
  )
}

export default RegisterPage
