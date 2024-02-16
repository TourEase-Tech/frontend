import { Link } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'

const HomeContainer = () => {
  return (
    <div className='flex flex-col min-h-[100vh]  overflow-hidden mx-auto xl:px-36 lg:px-20 md:px-14 max-md:px-5 '>
      <div className='flex flex-col gap-11 max-w-[60%] '>
        <h1 className='w-full text-white text-[50px] font-semibold break-words'>
          The suit place, if you seek a pure calm and green nature
        </h1>
        <p className='text-[#e8e8f9] text-[20px] font-normal  break-words'>
          Across our incredible country, you can find everything from untamed wilderness to rich culture. There's more
          to find in Tourease
        </p>
        <Link
          to={path.login}
          className='bg-[#CCD965] py-4 max-w-max px-8 justify-center items-start inline-flex rounded-full text-black '
        >
          <span className='font-medium'>Start Seeking</span>
        </Link>
      </div>
    </div>
  )
}

export default HomeContainer
