import path from 'src/modules/Share/constants/path'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import logo from 'src/modules/Share/assets/images/logo.png'
import { useContext, useState } from 'react'
import { AppContext } from 'src/modules/Share/contexts'
import { Popover } from '@mui/material'
import Button from 'src/modules/Share/components/Button'
import { clearTokenFromLocalStorage } from 'src/modules/Authentication/utils/auth'
import { Profile } from 'src/modules/Share/interfaces'
import ModalCustom from 'src/modules/Share/components/ModelCustom'
import EditProfile from 'src/modules/Share/components/EditProfile'
import ChangePassword from 'src/modules/Share/components/ChangePassword'

interface Props {
  profile: Profile
}
const HomeHeader = ({ profile }: Props) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext)

  const [isOpenModalProfile, setIsOpenModalProfile] = useState<boolean>(false)

  const [isOpenModalChangePassword, setIsOpenModalChangePassword] = useState<boolean>(false)

  const handleCloseModelProfile = () => {
    setIsOpenModalProfile(false)
  }
  const handleOpenModelProfile = () => {
    setIsOpenModalProfile(true)
  }
  const handleOpenModalChangePassword = () => {
    setIsOpenModalChangePassword(true)
  }

  const handleCloseModelChangePassword = () => {
    setIsOpenModalChangePassword(false)
  }

  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
    clearTokenFromLocalStorage()
    navigate(path.login)
  }

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopover = () => {
    setAnchorEl(null)
  }

  const isOpen = Boolean(anchorEl)
  const id = isOpen ? 'popover' : undefined

  return (
    <div className='w-full transition-none top-0 bg-[#a1c19c]/90 sticky flex px-20 '>
      <div className='w-full h-full m-auto'>
        <div className='flex justify-between relative items-center py-0 h-full'>
          <Link to={path.home_page} className='text-inherit flex items-center justify-center'>
            <img className='w-28 h-28' src={logo} alt='' />
            <h1 className='text-[24px] font-semibold text-white'>Tourease</h1>
          </Link>
          <div className='flex items-center justify-between gap-8'>
            <ul className='flex lg:items-center list-none font-semibold  '>
              <NavLink
                to={path.home_page}
                className={({ isActive }) =>
                  classNames(
                    'cursor-pointer transition-all relative hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px] ',
                    {
                      'text-[#4c4c4c]': isActive,
                      'text-white': !isActive
                    }
                  )
                }
              >
                Home
              </NavLink>
              <NavLink
                to={path.tour_client}
                className={({ isActive }) =>
                  classNames(
                    'cursor-pointer transition-all hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px] ',
                    {
                      'text-[#4c4c4c]': isActive,
                      'text-white': !isActive
                    }
                  )
                }
              >
                Tours
              </NavLink>
              <NavLink
                to={'/things-to-do'}
                className={({ isActive }) =>
                  classNames(
                    'cursor-pointer transition-all hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px]',
                    {
                      'text-[#4c4c4c]': isActive,
                      'text-white': !isActive
                    }
                  )
                }
              >
                Things to do
              </NavLink>
              <NavLink
                to={'/plan'}
                className={({ isActive }) =>
                  classNames(
                    'cursor-pointer transition-all hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px]',
                    {
                      'text-[#4c4c4c]': isActive,
                      'text-white': !isActive
                    }
                  )
                }
              >
                Plant your trip
              </NavLink>
            </ul>
          </div>
          {isAuthenticated ? (
            <div className='flex items-center gap-4 '>
              <span className='md:text-[14px] font-semibold text-white'>
                {profile?.firstname} {profile?.lastname}
              </span>
              <div>
                <Button
                  onClick={handleOpenPopover}
                  classNameButton='relative bg-slate-300 rounded-full outline-none w-[52px] pt-[100%]'
                >
                  <img
                    src='https://res.cloudinary.com/dz1kgngrn/image/upload/v1708760435/images/4cb3e834744d6ffe55d1ccf6d850add1_e0tffe.jpg'
                    alt='avatar'
                    className='rounded-full top-0 h-full w-full object-cover object-top absolute'
                  />
                </Button>
                <Popover
                  id={id}
                  open={isOpen}
                  anchorEl={anchorEl}
                  onClose={handleClosePopover}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                >
                  <Button
                    onClick={() => {
                      handleClosePopover()
                      handleOpenModelProfile()
                    }}
                    classNameButton='flex items-center cursor-pointer w-full px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-800'
                  >
                    <svg
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-4 h-4 max-md:w-3 max-md:h-3 mr-3 max-md:mr-1'
                      aria-hidden='true'
                    >
                      <path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                    </svg>
                    <span className='w-[140px] max-md:w-[120px] max-md:text-[12px] line-clamp-1 text-start'>
                      Profile
                    </span>
                  </Button>
                  <Link
                    to={path.myfavorite}
                    className='flex items-center cursor-pointer w-full px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-800'
                    onClick={handleClosePopover}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 max-md:w-3 max-md:h-3 mr-3 max-md:mr-1'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                      />
                    </svg>

                    <span className='w-[140px] max-md:w-[120px] max-md:text-[12px] line-clamp-1 text-start'>
                      My Favorite
                    </span>
                  </Link>
                  <Button
                    onClick={() => {
                      handleClosePopover()
                      handleOpenModalChangePassword()
                    }}
                    classNameButton='flex items-center cursor-pointer w-full px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-800'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 max-md:w-3 max-md:h-3 mr-3 max-md:mr-1'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
                      />
                    </svg>
                    <span className='w-[140px] max-md:w-[120px] max-md:text-[12px] line-clamp-1 text-start'>
                      Change password
                    </span>
                  </Button>
                  <Button
                    onClick={handleLogout}
                    classNameButton='flex items-center cursor-pointer w-full px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-800'
                  >
                    <svg
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-4 h-4 max-md:w-3 max-md:h-3 mr-3 max-md:mr-1'
                      aria-hidden='true'
                    >
                      <path d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1' />
                    </svg>
                    <span className='w-[140px] max-md:w-[120px] max-md:text-[12px] line-clamp-1 text-start'>
                      Logout
                    </span>
                  </Button>
                </Popover>
              </div>
              <ModalCustom isOpenModal={isOpenModalProfile} handleClose={handleCloseModelProfile}>
                <EditProfile handleCloseModal={handleCloseModelProfile} />
              </ModalCustom>
              <ModalCustom isOpenModal={isOpenModalChangePassword} handleClose={handleCloseModelChangePassword}>
                <ChangePassword handleCloseModal={handleCloseModelChangePassword} />
              </ModalCustom>
            </div>
          ) : (
            <Link
              to={path.register}
              className='rounded-full border border-solid border-white px-6  py-2 text-white text-[14px] hover:bg-[#4c4c4c] transition-all duration-700'
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
