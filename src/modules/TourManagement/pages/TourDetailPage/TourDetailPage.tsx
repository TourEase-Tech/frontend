import { Fragment, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import EditTourForm from '../../components/EditTourForm'
import Button from 'src/modules/Share/components/Button'
import path from 'src/modules/Share/constants/path'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import useQueryTourConfig from '../../hooks/useQueryTourConfig'
import { EditTourCommandHandler, GetTourByIdQuery } from '../../services'
import { useForm } from 'react-hook-form'
import { FormTourSchema, FormTourType } from '../../utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

const TourDetailPage = () => {
  const [file, setFile] = useState<File>()

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const handleChangeFile = async (file?: File) => {
    setFile(file)
    setValue('images', '')
    try {
      const formData = new FormData()
      formData.append('file', file as Blob)
      formData.append('upload_preset', 'uploadImage')

      const response = await fetch(`https://api.cloudinary.com/v1_1/dz1kgngrn/image/upload`, {
        method: 'POST',
        body: formData
      })
      if (response.ok) {
        const data = await response.json()
        setValue('images', data.secure_url)
      } else {
        console.log('Failed to uploading file: ' + response.statusText)
      }
    } catch (error) {
      console.log('Failed to uploading file: ' + error)
    }
  }

  const navigate = useNavigate()
  const location = useLocation()

  const prevTourConfig = location.state
  console.log('prevTourConfig', prevTourConfig)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<FormTourType>({
    resolver: yupResolver(FormTourSchema)
  })

  const queryTourConfig = useQueryTourConfig()
  const getTourByIdQuery = new GetTourByIdQuery(queryTourConfig.id as string)
  const tour = getTourByIdQuery.fetch()

  const editTourCommandHandler = new EditTourCommandHandler()

  const handleSubmitForm = handleSubmit(async (data) => {
    editTourCommandHandler.handle(
      {
        ...data,
        id: queryTourConfig.id as string
      },
      () => {
        navigate(path.tour)
        toast.success('Tour updated successfully')
      },
      () => {
        toast.error('Update tour failed')
      }
    )
  })

  const handleCancel = () => {
    navigate({
      pathname: path.tour,
      search: createSearchParams(prevTourConfig).toString()
    })
  }

  return (
    <Fragment>
      <Helmet>
        <title>Edit Tour</title>
        <meta name='description' content='This is edit tour page of the project' />
      </Helmet>
      <form onSubmit={handleSubmitForm}>
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
            classNameButton='bg-[#26C6DA] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6 w-[100px]'
            type='submit'
            isLoading={editTourCommandHandler.isLoading()}
          >
            Save
          </Button>
        </div>
      </form>
    </Fragment>
  )
}

export default TourDetailPage
