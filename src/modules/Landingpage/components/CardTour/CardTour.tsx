import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'
import { formatDateTimeVN } from 'src/modules/Share/utils'
import { DataTourType } from 'src/modules/TourManagement/interfaces'

interface Props {
  tour: DataTourType
}
const CardTour = ({ tour }: Props) => {
  const navigate = useNavigate()

  const onShowDetail = (id: string) => {
    navigate({
      pathname: path.tour_detail,
      search: createSearchParams({
        id: id
      }).toString()
    })
  }
  return (
    <div
      className='min-w-[30%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:rounded-3xl max-sm:rounded-xl cursor-pointer'
      onClick={() => onShowDetail(tour.id)}
      role='button'
      tabIndex={0}
    >
      <div className='md:px-4 md:py-4 max-md:px-2 max-md:py-1 flex justify-center items-center w-full'>
        <img
          src={tour.images}
          alt='ui/ux review check'
          className='sm:rounded-2xl max-sm:rounded-lg border object-cover lg:h-[320px] md:h-[180px] max-md:h-[100px] w-full '
        />
      </div>
      <div className='lg:pb-8 md:px-4 md:pb-6 max-md:px-2 max-md:pb-4 overflow-hidden'>
        <div className='flex flex-col'>
          <span className='font-normal leading-7 text-[#a1c19c] lg:text-[24px] md:text-[16px] max-md:text-[12px] whitespace-nowrap break-words truncate'>
            {tour.name}
          </span>
          <div className='flex items-end justify-between md:gap-4 lg:text-[16px] md:text-[12px] max-md:text-[8px] overflow-hidden'>
            <span className='line-clamp-1'>{tour.destination}</span>
          </div>
        </div>
        <div className='mt-4 flex flex-col justify-start md:gap-4 max-md:gap-2 overflow-hidden'>
          <div className='flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='text-[#E80505] flex-shrink-0 lg:w-5 lg:h-5 md:w-4 md:h-4 max-md:w-3 max-md:h-3'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
              />
            </svg>
            <span className='text-[#A0A2A4] font-normal lg:text-[14px] md:text-[10px] max-md:text-[8px] truncate'>
              {tour.departureLocation}
            </span>
          </div>
          <div className='flex items-center gap-1 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='text-[#00F335] flex-shrink-0 lg:w-5 lg:h-5 md:w-4 md:h-4 max-md:w-3 max-md:h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z'
              />
            </svg>
            <div className='flex items-center gap-2 text-[#A0A2A4] font-normal lg:text-[14px] md:text-[10px] max-md:text-[8px]'>
              <span>{formatDateTimeVN(tour.departureDay)}</span>
            </div>
          </div>
          <div className='flex items-center gap-1 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='text-[#195E8E] lg:w-5 lg:h-5 md:w-4 md:h-4 max-md:w-2 max-md:h-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
            <div className='flex items-center gap-2 text-[#A0A2A4] font-normal lg:text-[14px] md:text-[10px] max-md:text-[8px]'>
              <span>{Number(tour.price).toLocaleString()} VNĐ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTour
