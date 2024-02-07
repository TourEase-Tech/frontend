import { TextField } from '@mui/material'
import Button from 'src/modules/Share/components/Button'
import { UnlockOrLockUserCommandHandler } from '../../services'
import Swal from 'sweetalert2'
import path from 'src/modules/Share/constants/path'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

interface Props {
  user: any
  handleClose: () => void
}
const UserDetail = ({ user, handleClose }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const prevAccountConfig = location.state

  const unlockOrLockUserCommandHandler = new UnlockOrLockUserCommandHandler()

  const handleLockUser = (id: string) => {
    Swal.fire({
      title: 'You want to lock this account?',
      text: 'You will not be able to undo once confirmed!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#26C6DA',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        unlockOrLockUserCommandHandler.handle(
          id,
          () => {
            Swal.fire('Lock success!', 'Account locked', 'success')
            handleClose()
            navigate({
              pathname: path.user,
              search: createSearchParams(prevAccountConfig).toString()
            })
          },
          (error: any) => {
            Swal.fire('Lỗi!', error.response.data.message, 'error')
          }
        )
      }
    })
  }

  const handleUnLockUser = (id: string) => {
    Swal.fire({
      title: 'You want to unlock this account?',
      text: 'You will not be able to undo once confirmed!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#26C6DA',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        unlockOrLockUserCommandHandler.handle(
          id,
          () => {
            Swal.fire('Unlock success!', 'Account active', 'success')
            handleClose()
            navigate({
              pathname: path.user,
              search: createSearchParams(prevAccountConfig).toString()
            })
          },
          (error: any) => {
            Swal.fire('Lỗi!', error.response.data.message, 'error')
          }
        )
      }
    })
  }
  return (
    <div className='flex flex-col justify-between gap-6 items-center bg-white p-6 rounded-lg w-[500px]'>
      {user && (
        <div className='w-full flex-col'>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-[20px] font-semibold'>Profile Account</h2>
            <Button classNameButton='p-2 hover:bg-slate-100 rounded-lg' onClick={handleClose}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </Button>
          </div>
          <div className='flex flex-col gap-5 py-5 '>
            <TextField disabled id='outlined-disabled' label='Email' value={user.email} />
            <TextField disabled id='outlined-disabled' label='First Name' value={user.firstname} />
            <TextField disabled id='outlined-disabled' label='Last Name' value={user.lastname} />
            <TextField disabled id='outlined-disabled' label='Phone Number' value={user.phonenumber} />
            <TextField disabled id='outlined-disabled' label='Address' value={user.address} />
            <TextField disabled id='outlined-disabled' label='Role' value={user.role} />
          </div>
          <div className='w-full flex justify-end'>
            {user.isActived ? (
              <Button classNameButton='p-2 bg-red-500 text-white rounded-lg' onClick={() => handleLockUser(user.id)}>
                Lock
              </Button>
            ) : (
              <Button
                classNameButton='p-2 bg-green-500 text-white rounded-lg'
                onClick={() => handleUnLockUser(user.id)}
              >
                Unlock
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetail
