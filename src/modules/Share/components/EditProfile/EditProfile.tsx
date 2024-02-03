import { useForm } from 'react-hook-form'
import Button from '../Button'
import { FormProfileSchema, FormProfileType } from '../../utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { EditProfileCommandHandler, GetProfileQuery } from '../../services'
import { useContext } from 'react'
import { AppContext } from '../../contexts'
import ProfileInfo from '../ProfileInfo'
import { toast } from 'react-toastify'

interface Props {
  handleCloseModal: () => void
}
const EditProfile = ({ handleCloseModal }: Props) => {
  const { isAuthenticated } = useContext(AppContext)
  const { control, setValue, handleSubmit } = useForm<FormProfileType>({
    resolver: yupResolver(FormProfileSchema)
  })

  const getProfileQuery = new GetProfileQuery(isAuthenticated)
  const profile = getProfileQuery.fetch()

  const editProfileCommandHandler = new EditProfileCommandHandler()

  const handleSubmitForm = handleSubmit((data) => {
    editProfileCommandHandler.handle(
      data,
      () => {
        handleCloseModal()
        toast.success('Profile updated successfully')
      },
      (error: any) => {
        toast.error(error.response.data.message)
      }
    )
  })
  return (
    <div className='flex flex-col justify-between gap-6 items-center bg-white p-6 rounded-lg w-[1000px] '>
      <div className='flex justify-between items-center w-full'>
        <h2 className='text-[20px] font-semibold'>Profile Account</h2>
        <Button classNameButton='p-2 hover:bg-slate-100 rounded-lg' onClick={handleCloseModal}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 '
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </Button>
      </div>
      <form onSubmit={handleSubmitForm} className='w-full'>
        <ProfileInfo
          control={control}
          profile={profile}
          setValue={setValue}
          isLoading={editProfileCommandHandler.isLoading()}
        />
      </form>
    </div>
  )
}

export default EditProfile
