import { Link, NavLink } from 'react-router-dom'
import path from '../../constants/path'
import logo from '../../assets/images/logo.png'
import classNames from 'classnames'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import TourOutlinedIcon from '@mui/icons-material/TourOutlined'

const SideBar = () => {
  return (
    <div className='block border-none whitespace-nowrap '>
      <div className='fixed h-[600px] flex flex-col top-0 left-0 outline-0 m-4 rounded-xl overflow-y-auto z-50 shadow-lg border-none bg-gradient-to-br from-gray-800 to-black transform translate-x-0 transition-transform duration-200 ease-in-out'>
        <div className='px-[32px] pt-[24px] pb-[8px]'>
          {/* <div className='absolute top-0 right-0 p-[13px] bg-transparent text-[#344767]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          </div> */}
          <Link to={path.dashboard}>
            <img src={logo} className='overflow-hidden w-40 h-40 ' alt='logo' />
          </Link>
        </div>

        <hr className='custom-hr flex-shrink-0 border-t-2 border-r border-l mb-4 border-b-0' />

        <ul className='relative'>
          <li className='py-2 px-2'>
            <NavLink
              to={path.dashboard}
              className={({ isActive }) =>
                classNames(
                  'flex items-center py-2 px-4 my-1 rounded-lg  whitespace-nowrap cursor-pointer gap-2 text-white hover:bg-[#ffffff33]',
                  {
                    'bg-[#1a73e8] hover:bg-[#1a73e8]': isActive
                  }
                )
              }
            >
              <DashboardIcon className='min-w-4 h-min-4 ' />
              <span className='font-normal text-sm'>Dashboard</span>
            </NavLink>
          </li>
          <li className='py-2 px-2'>
            <NavLink
              to={path.user}
              className={({ isActive }) =>
                classNames(
                  'flex items-center py-2 px-4 my-1 rounded-lg  whitespace-nowrap cursor-pointer gap-2 text-white hover:bg-[#ffffff33]',
                  {
                    'bg-[#1a73e8] hover:bg-[#1a73e8]': isActive
                  }
                )
              }
            >
              <ManageAccountsIcon className='min-w-4 h-min-4 ' />
              <span className='font-normal text-sm'>User Management</span>
            </NavLink>
          </li>
          <li className='py-2 px-2'>
            <NavLink
              to={path.tour}
              className={({ isActive }) =>
                classNames(
                  'flex items-center py-2 px-4 my-1 rounded-lg  whitespace-nowrap cursor-pointer gap-2 text-white hover:bg-[#ffffff33]',
                  {
                    'bg-[#1a73e8] hover:bg-[#1a73e8]': isActive
                  }
                )
              }
            >
              <TourOutlinedIcon className='min-w-4 h-min-4 ' />
              <span className='font-normal text-sm'>Tour Management</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
