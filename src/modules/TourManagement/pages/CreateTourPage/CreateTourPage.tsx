import { yupResolver } from '@hookform/resolvers/yup'
import { Fragment, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { FormTourSchema, FormTourType } from '../../utils'
import CreateTourForm from '../../components/CreateTourForm'
import { CreateTourCommandHandler } from '../../services'
import Button from 'src/modules/Share/components/Button'
import { useNavigate } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'

const CreateTourPage = () => {
  const [file, setFile] = useState<File>()

  const navigate = useNavigate()

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormTourType>({
    resolver: yupResolver(FormTourSchema)
  })

  const handleChangeFile = async (file?: File) => {
    setFile(file)
    setValue('images', [])
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
        setValue('images', [data.secure_url])
      } else {
        console.log('Failed to uploading file: ' + response.statusText)
      }
    } catch (error) {
      console.log('Failed to uploading file: ' + error)
    }
  }

  const createTourCommandHandler = new CreateTourCommandHandler()

  const handleSubmitForm = handleSubmit(async (data) => {
    createTourCommandHandler.handle(
      data,
      () => {
        console.log('Create tour successfully')
      },
      (error: any) => {
        console.log('Create tour failed: ' + error)
      }
    )
  })

  const handleCancel = () => {
    navigate({
      pathname: path.tour
    })
  }

  return (
    <Fragment>
      <Helmet>
        <title>Create Tour</title>
        <meta name='description' content='This is create tour page of the project' />
      </Helmet>
      <form onSubmit={handleSubmitForm}>
        <CreateTourForm
          register={register}
          previewImage={previewImage}
          onChange={handleChangeFile}
          control={control}
          errors={errors}
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
            isLoading={createTourCommandHandler.isLoading()}
          >
            Create
          </Button>
        </div>
      </form>
    </Fragment>
  )
}

export default CreateTourPage
