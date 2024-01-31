import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'
import ForgetPasswordForm from '../../components/ForgetPasswordForm'
import { FormForgetPasswordSchema, FormForgetPasswordType } from '../../utils'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const ForgetPasswordPage = () => {
  const {
    register,
    formState: { errors }
  } = useForm<FormForgetPasswordType>({
    resolver: yupResolver(FormForgetPasswordSchema)
  })
  return (
    <Fragment>
      <Helmet>
        <title>Forget Password</title>
        <meta name='description' content='This is forget password page of the project' />
      </Helmet>
      <div className='flex flex-col justify-center items-center m-auto w-full sm:w-[520px]  px-6 h-full border mt-10 bg-white rounded-2xl py-10'>
        <Link to={path.home_page} className='text-[32px]'>
          Tourease
        </Link>
        <form>
          <ForgetPasswordForm register={register} errors={errors} />
        </form>
      </div>
    </Fragment>
  )
}

export default ForgetPasswordPage
