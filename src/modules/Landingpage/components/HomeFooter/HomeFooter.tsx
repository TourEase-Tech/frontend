import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <footer className='relative  w-full px-20 py-5 bg-[#a1c19c]/90'>
      <div className='h-full m-auto flex flex-row'>
        <div className='flex flex-col w-full gap-4'>
          <div className='flex flex-col w-auto gap-0 text-[#4c4c4c]'>
            <h2 className='font-bold'>Tourease</h2>
            <div className='flex items-center gap-[8px] mt-4'>
              <span className='text-[14px] pr-3 border-r border-solid border-[#484848]'>About</span>
              <span className='text-[14px] pr-3 border-r border-solid border-[#484848]'>Term of Service</span>
              <span className='text-[14px] pr-3 border-r border-solid border-[#484848]'>Privacy Policy</span>
              <span className='text-[14px] pr-3 border-r border-solid border-[#484848]'>Help</span>
              <span className='text-[14px]'>Company</span>
            </div>
          </div>
          <div className='flex flex-col text-[#484848] text-[10px]'>
            <span></span>
            <span></span>
          </div>
          <div className='flex flex-row gap-[8px]'>
            <Link to='' className='px-2 py-2 bg-[#303030] rounded-3xl'>
              <BsFacebook className='w-[24px] h-[24px] text-[#c6c6c6]' />
            </Link>
            <Link to='' className='px-2 py-2 bg-[#303030] rounded-3xl'>
              <BsTwitter className='w-[24px] h-[24px] text-[#c6c6c6]' />
            </Link>
            <Link to='' className='px-2 py-2 bg-[#303030] rounded-3xl'>
              <BsYoutube className='w-[24px] h-[24px] text-[#c6c6c6]' />
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className='flex justify-between flex-col'>
          <div className='relative flex items-center gap-[20px]'></div>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
