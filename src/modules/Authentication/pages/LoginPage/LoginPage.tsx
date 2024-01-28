import { Fragment } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'
import LoginForm from '../../components/LoginForm'
import { useForm } from 'react-hook-form'
import { FormLoginSchema, FormLoginType } from '../../utils/rules'
import { Link } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'
const LoginPage = () => {
  const {
    register,
    formState: { errors }
  } = useForm<FormLoginType>({
    resolver: yupResolver(FormLoginSchema)
  })
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='This is login page of the project' />
      </Helmet>
      <div className='flex flex-col justify-center items-center m-auto w-full sm:w-[520px]  px-6 h-full border mt-10 bg-white rounded-2xl py-10'>
        <Link to={path.home_page} className='text-[32px]'>
          Tourease
        </Link>
        <form onSubmit={() => {}}>
          <LoginForm register={register} errors={errors} />
        </form>
        <Link to={path.forget_password} className='flex justify-center text-[#757575] text-[14px] underline'>
          Reset Password
        </Link>
        <div className='flex m-auto mt-4 items-center w-[90%] sm:w-[456px] sm:px-8 px-6 bg-[#303030] h-[1px]'></div>
        <div className='flex flex-col m-auto mt-4 items-center w-full justify-center'>
          <div className='pb-4 text-[#c6c6c6] pt-6 text-[16px] font-[500] font-termina '>
            Is this your first time on TOUREASE?
          </div>
          <Link
            to={path.register}
            className='bg-transparent text-[#949494] border border-solid border-[#949494] flex items-center justify-center text-sm text-center h-[55px] font-bold no-underline w-full'
          >
            Create Account
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginPage
