import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { formatDateTimeVN } from 'src/modules/Share/utils'
import useQueryTourConfig from 'src/modules/TourManagement/hooks/useQueryTourConfig'
import { GetTourByIdQuery } from 'src/modules/TourManagement/services'

const TourClientDetailPage = () => {
  const queryTourConfig = useQueryTourConfig()
  const getTourByIdQuery = new GetTourByIdQuery(queryTourConfig.id as string)
  const tour = getTourByIdQuery.fetch()

  return (
    <Fragment>
      <Helmet>
        <title>Tour Detail</title>
        <meta name='description' content='This is tour detail of the project' />
      </Helmet>
      {tour && (
        <div className='flex flex-col mx-auto px-20 py-10 gap-4'>
          <h1 className='text-[28px] leading-10 text-black font-semibold'>{tour?.name}</h1>
          <div className=''></div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 flex flex-col'>
              <img className='rounded-2xl w-full' src={tour.images} alt='' />
              <div className='flex flex-col gap-4 mt-10 px-6 py-4 border-t-2 font-semibold'>
                <div className='flex justify-between '>
                  <span className=''>Destination</span>
                  <span className=''>{tour.destination}</span>
                </div>
                <div className='flex justify-between'>
                  <span className=''>Period</span>
                  <span className=''>{tour.period}</span>
                </div>
                <div className='flex justify-between'>
                  <span className=''>Departure Day</span>
                  <span className=''>{formatDateTimeVN(tour.departureDay)}</span>
                </div>
                <div className='text-justify font-sans italic py-4'>{tour.description}</div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col px-4 border-solid border-[2px]'>
                <h2 className='text-[16px] leading-6 font-semibold py-4 border-b-2 text-[#a1c19c]'>{tour.name}</h2>
                <ul>
                  <li className='flex justify-between mb-4 pb-4 border-b-2'>
                    <div className='font-semibold'>Time</div>
                    <span className=''>{tour.period}</span>
                  </li>
                  <li className='flex justify-between mb-4 pb-4 border-b-2'>
                    <div className='font-semibold'>Departure Day</div>
                    <span className=''>{formatDateTimeVN(tour.departureDay)}</span>
                  </li>
                  <li className='flex justify-between mb-4 pb-4 border-b-2'>
                    <div className='font-semibold'>Departure Location</div>
                    <span className=''>{tour.departureLocation}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default TourClientDetailPage
