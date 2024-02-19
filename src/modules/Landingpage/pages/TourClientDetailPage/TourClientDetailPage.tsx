import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'
import Button from 'src/modules/Share/components/Button'
import { formatDateTimeVN } from 'src/modules/Share/utils'
import { FormLike } from 'src/modules/TourManagement/interfaces'
import { GetTourByIdQuery, LikeOrUnlikeTourCommandHandler } from 'src/modules/TourManagement/services'
import CommentList from '../../components/CommentList'
import { useQueryParams } from 'src/modules/Share/hooks'

const TourClientDetailPage = () => {
  const queryTourConfig = useQueryParams()

  const getTourByIdQuery = new GetTourByIdQuery(queryTourConfig.id as string)
  const tour = getTourByIdQuery.fetch()

  const likeOrUnlikeCommandHandler = new LikeOrUnlikeTourCommandHandler()

  const handleLikeOrUnlikeTour = (body: FormLike) => {
    likeOrUnlikeCommandHandler.handle(
      body,
      () => {},
      (error: any) => {
        toast.error(error.message)
      }
    )
  }

  return (
    <Fragment>
      <Helmet>
        <title>Tour Detail</title>
        <meta name='description' content='This is tour detail of the project' />
      </Helmet>
      {tour && (
        <div className='flex flex-col mx-auto px-20 py-10 gap-4'>
          <h1 className='text-[28px] leading-10 text-black font-semibold'>{tour?.name}</h1>
          <div className='mb-5 flex items-start gap-2'>
            <Button
              classNameButton=''
              onClick={() =>
                handleLikeOrUnlikeTour({ tour: queryTourConfig.id as string, action: tour.isLiked ? 'unlike' : 'like' })
              }
            >
              {tour.isLiked ? (
                <svg
                  aria-label='Unlike'
                  className='text-[#ff3040]'
                  fill='currentColor'
                  height='24'
                  role='img'
                  viewBox='0 0 48 48'
                  width='24'
                >
                  <title>Unlike</title>
                  <path d='M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                </svg>
              ) : (
                <svg aria-label='Like' fill='currentColor' height='24' role='img' viewBox='0 0 24 24' width='24'>
                  <title>Like</title>
                  <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
                </svg>
              )}
            </Button>
            <span className='text-[20px]'>{tour.numLikes}</span>
          </div>
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
              <CommentList key={queryTourConfig.id} />
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
              <div className='flex flex-col gap-4 px-4 py-5 border-solid border-[2px] mt-20 bg-[#a1c19c] rounded-md'>
                <div className='font-bold text-[14px]'>
                  Up to: <span className='text-[25px] font-bold leading-8'>{tour.price} VND</span>
                </div>
                <button className='w-full py-4 bg-[#008fea] rounded-xl text-[#f9f9f9] font-semibold hover:bg-[#f9f9f9] hover:text-[#008fea] transition-all duration-700'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default TourClientDetailPage
