import HomeIcon from '@mui/icons-material/Home'
import Button from '../Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import { useContext, useEffect, useState } from 'react'
import { Popover } from '@mui/material'
import { AppContext } from '../../contexts'
import { clearTokenFromLocalStorage } from 'src/modules/Authentication/utils/auth'
import { useNavigate } from 'react-router-dom'
import path from '../../constants/path'
import ModalCustom from '../ModelCustom'
import EditProfile from '../EditProfile'
import ChangePassword from '../ChangePassword'
import classNames from 'classnames'
const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setHasScrolled(scrollTop > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { setIsAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  const [isOpenModalChangePassword, setIsOpenModalChangePassword] = useState<boolean>(false)
  const [isOpenModalProfile, setIsOpenModalProfile] = useState<boolean>(false)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleLogout = () => {
    setIsAuthenticated(false)
    clearTokenFromLocalStorage()
    navigate(path.home_page)
  }

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClosePopover = () => {
    setAnchorEl(null)
  }

  const handleOpenModelProfile = () => {
    setIsOpenModalProfile(true)
  }

  const handleCloseModelProfile = () => {
    setIsOpenModalProfile(false)
  }

  const handleOpenModalChangePassword = () => {
    setIsOpenModalChangePassword(true)
  }

  const handleCloseModelChangePassword = () => {
    setIsOpenModalChangePassword(false)
  }

  const isOpen = Boolean(anchorEl)

  const id = isOpen ? 'popover' : undefined

  return (
    <header
      className={classNames(
        'sticky left-auto right-0 grid px-0 rounded-2xl w-full min-h-[20px] transition-all top-0 ',
        {
          'shadow-bottom shadow-xl bg-white': hasScrolled
        }
      )}
    >
      <div className='py-3 px-4 flex justify-between items-center flex-row relative'>
        <div className='flex items-center justify-stretch w-max'>
          <div className='text-[#344767]'>
            <nav className='text-base font-normal flex items-center gap-4 '>
              <HomeIcon className='w-4 h-4' />
              <span>/</span>
              <span>Dashboard</span>
            </nav>
            <h6 className='text-ellipsis whitespace-nowrap text-base overflow-hidden capitalize font-bold'>
              Dashboard
            </h6>
          </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <Button classNameButton='' onClick={handleOpenModelProfile}>
            <AccountCircleIcon />
          </Button>
          <Button classNameButton='relative outline-none' onClick={handleOpenPopover}>
            <SettingsIcon />
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
                handleOpenModalChangePassword()
                handleClosePopover()
              }}
              classNameButton='flex items-center cursor-pointer w-full p-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-800'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 mr-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
              <span>Change Password</span>
            </Button>
            <Button
              onClick={handleLogout}
              classNameButton='flex items-center cursor-pointer w-full  p-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-800'
            >
              <svg
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-4 h-4 mr-3'
                aria-hidden='true'
              >
                <path d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1' />
              </svg>
              <span>Logout</span>
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
    </header>
  )
}

export default NavBar
