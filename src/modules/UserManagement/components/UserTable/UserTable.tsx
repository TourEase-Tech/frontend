import HeaderTable from 'src/modules/Share/components/HeaderTable/HeaderTable'
import { StatusToMessage, UserTableHeader } from '../../constants'
import { DataUserType, UsersListType } from '../../interfaces'
import Skeleton from 'react-loading-skeleton'
import { Avatar } from '@mui/material'
import { useState } from 'react'
import ModalCustom from 'src/modules/Share/components/ModelCustom'
import UserDetail from '../UserDetail'
import classNames from 'classnames'

interface Props {
  users: UsersListType
  onSort: (column: string) => void
  isLoading: boolean
}

const UserTable = ({ users, onSort, isLoading }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const [selectedItem, setSelectedItem] = useState<any>(null)

  const handleOpenModal = (item: DataUserType) => {
    setIsOpenModal(true)
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
    setSelectedItem('')
  }

  const stringToColor = (string: string) => {
    let hash = 0
    let i

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }

    return color
  }
  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[0]}`
    }
  }
  return (
    <div>
      <table className='w-full bg-white text-left border-[1px] border-gray-200 p-2'>
        <HeaderTable header={UserTableHeader} onSort={onSort} />
        <tbody>
          {isLoading
            ? Array(10)
                .fill(0)
                .map((_, index) => (
                  <tr
                    className='text-[14px] text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-50'
                    key={index}
                  >
                    <th className='px-2 py-4 font-medium w-[40%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[20%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[20%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[20%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                  </tr>
                ))
            : users &&
              users.data.data.map((user) => (
                <tr
                  className='text-[14px] text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-50'
                  key={user.id}
                  onClick={() => handleOpenModal(user)}
                >
                  <th className='px-2 py-4 font-medium w-[40%] flex gap-2'>
                    <Avatar {...stringAvatar(`${user.firstname}`)} />
                    <div className='flex flex-col'>
                      <span>
                        {user.firstname} {user.lastname}
                      </span>
                      {user.email}
                    </div>
                  </th>
                  <th className='px-2 py-4 font-medium w-[20%] text-center'>
                    <span
                      className={classNames('px-3 py-1 rounded-xl', {
                        'bg-red-500': !user.isActived,
                        'bg-green-500': user.isActived
                      })}
                    >
                      {StatusToMessage(user.isActived)}
                    </span>
                  </th>
                  <th className='px-2 py-4 font-medium w-[20%] text-center'>{user.phonenumber}</th>
                  <th className='px-2 py-4 font-medium w-[20%] text-center truncate'>{user.address}</th>
                </tr>
              ))}
        </tbody>
      </table>
      <ModalCustom isOpenModal={isOpenModal} handleClose={handleCloseModal}>
        <UserDetail user={selectedItem} handleClose={handleCloseModal} />
      </ModalCustom>
    </div>
  )
}

export default UserTable
