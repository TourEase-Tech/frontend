import { Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { GetAllMyFavoriteQuery } from 'src/modules/TourManagement/services'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import CardTour from '../../components/CardTour'
import { CircularProgress, TextField } from '@mui/material'
import { getUserIdFromLocalStorage } from 'src/modules/Authentication/utils'
import { toast } from 'react-toastify'
import TourSlider from '../../components/TourSlider'

const MyFavoritePage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [recommendedTours, setRecommendedTours] = useState([])
  const getAllMyFavoriteQuery = new GetAllMyFavoriteQuery()
  const dataMyFavorite = getAllMyFavoriteQuery.fetch()
  const filteredData = (dataMyFavorite || []).filter((data) =>
    data.tour.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  const userId = getUserIdFromLocalStorage()
  useEffect(() => {
    const fetchRecommendedTours = async () => {
      try {
        const response = await fetch(`https://ai-c9ka.onrender.com/matrix_factorization?user_id=${userId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch recommended tours')
        }
        const data = await response.json()
        setRecommendedTours(data.recommended_tours)
      } catch (error: any) {
        toast.error(error.message)
      }
    }
    fetchRecommendedTours()
  }, [userId])

  return (
    <Fragment>
      <Helmet>
        <title>My Favorite</title>
        <meta name='description' content='This is my favorite of the project' />
      </Helmet>
      {dataMyFavorite && recommendedTours ? (
        <div className=''>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center px-6  pt-10'>
              <h2 className='text-[30px] text-[#a1c19c]'>My Favorite</h2>
              <TextField
                label='Search by name...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className='overflow-hidden py-10 w-full px-4 '>
              <Swiper
                slidesPerView={3}
                spaceBetween={50}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                className='px-6 !overflow-visible flex'
              >
                {filteredData &&
                  filteredData.length > 0 &&
                  filteredData.map((data, index) => (
                    <SwiperSlide key={index}>
                      <CardTour tour={data.tour} />
                    </SwiperSlide>
                  ))}
                {filteredData && filteredData.length === 0 && (
                  <div className='flex w-full items-center justify-center'>
                    <div className='text-center'>
                      <div className='inline-flex rounded-full bg-[#c6f8ff] p-4'>
                        <svg xmlns='http://www.w3.org/2000/svg' id='calendar' className='w-16 h-16'>
                          <path d='M53 5h-8v4H19V5h-8v4H0v50h64V9H53V5zm-6 2h4v6h-4V7zM13 7h4v6h-4V7zM2 57V19h60v38H2zm60-46v6H2v-6h9v4h8v-4h26v4h8v-4h9z'></path>
                        </svg>
                      </div>
                      <h1 className='mt-5 lg:text-[40px] md:text-[20px] max-md:text-[14px] font-bold text-slate-800 '>
                        No Tour Available
                      </h1>
                    </div>
                  </div>
                )}
              </Swiper>
            </div>
          </div>
          <TourSlider heading='Recommend Tour' tours={recommendedTours} />
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-[200px]'>
          <CircularProgress color='secondary' variant='indeterminate' />
        </div>
      )}
    </Fragment>
  )
}

export default MyFavoritePage
