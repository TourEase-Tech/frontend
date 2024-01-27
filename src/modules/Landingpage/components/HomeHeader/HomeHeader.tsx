import path from 'src/modules/Share/constants/path'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import logo from 'src/modules/Share/assets/images/logo.png'
const HomeHeader = () => {
  return (
    <div className='w-full transition-none top-0 bg-transparent sticky flex px-20'>
      <div className='w-full h-full m-auto'>
        <div className='flex justify-between relative items-center sm:pb-4  py-0 h-full'>
          <Link to={path.home_page} className='text-inherit flex items-center justify-center'>
            <img className='w-28 h-28' src={logo} alt='' />
            <h1 className='text-[24px] font-semibold text-white'>Tourease</h1>
          </Link>
          <div className='flex items-center justify-between gap-8'>
            <ul className='lg:flex lg:items-center list-none font-semibold  '>
              <NavLink
                to={path.home_page}
                className={({ isActive }) =>
                  classNames(
                    'cursor-pointer transition-all hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px]  md:text-[14px] text-white',
                    {
                      'text-[#4c4c4c]': isActive
                    }
                  )
                }
              >
                Home
              </NavLink>
              <NavLink
                to={'/tour'}
                className={({ isActive }) =>
                  classNames(
                    'cursor-pointer transition-all hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px]  md:text-[14px] text-white',
                    {
                      'text-[#4c4c4c]': isActive
                    }
                  )
                }
              >
                Tour
              </NavLink>
              <NavLink
                to={'/things'}
                className={({ isActive }) =>
                  classNames(
                    'cursor-pointer transition-all hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px]  md:text-[14px] text-white',
                    {
                      'text-[#4c4c4c]': isActive
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
                    'cursor-pointer transition-all hover:text-[#4c4c4c] duration-300 flex-shrink-0 md:pt-[18px] md:pr-[7px] md:pb-[18px] md:pl-0 lg:py-[10px] lg:px-[14px] md:text-[14px] text-white',
                    {
                      'text-[#4c4c4c]': isActive
                    }
                  )
                }
              >
                Plant your trip
              </NavLink>
            </ul>
          </div>
          <Link
            to={path.login}
            className='rounded-full border border-solid border-white px-6  py-2 text-white text-[14px] hover:bg-[#4c4c4c] transition-all duration-700'
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
