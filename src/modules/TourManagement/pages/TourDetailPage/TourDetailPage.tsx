import { Fragment, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import EditTourForm from '../../components/EditTourForm'
import Button from 'src/modules/Share/components/Button'
import path from 'src/modules/Share/constants/path'
import { useNavigate } from 'react-router-dom'
import useQueryTourConfig from '../../hooks/useQueryTourConfig'
import { GetTourByIdQuery } from '../../services'
import { useForm } from 'react-hook-form'
import { FormTourSchema, FormTourType } from '../../utils'
import { yupResolver } from '@hookform/resolvers/yup'

const TourDetailPage = () => {
  const [file, setFile] = useState<File>()

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const handleChangeFile = (file?: File) => {
    setFile(file)
  }

  const navigate = useNavigate()

  const {
    register,
    control,
    handleSubmit,
    setError,
    getValues,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormTourType>({
    resolver: yupResolver(FormTourSchema)
  })

  const queryTourConfig = useQueryTourConfig()
  const getTourByIdQuery = new GetTourByIdQuery(queryTourConfig.id as string)
  const tour = getTourByIdQuery.fetch()

  const handleCancel = () => {
    navigate({
      pathname: path.tour
    })
  }
  return (
    <Fragment>
      <Helmet>
        <title>Edit Tour</title>
        <meta name='description' content='This is edit tour page of the project' />
      </Helmet>
      <form onSubmit={() => {}}>
        <EditTourForm
          register={register}
          previewImage={previewImage}
          onChange={handleChangeFile}
          errors={errors}
          setValue={setValue}
          control={control}
          tour={tour}
        />
        <div className='flex justify-end gap-6 mx-6'>
          <Button
            type='button'
            classNameButton='bg-gray-300 py-2 px-4 rounded-lg text-[14px] text-gray-800 font-semibold mt-6'
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            classNameButton='bg-[#26C6DA] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6 w-[90px]'
            type='submit'
          >
            Save
          </Button>
        </div>
      </form>
    </Fragment>
  )
}

export default TourDetailPage
