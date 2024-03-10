import { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ListTour from '../../components/ListTour'
import { GetAllToursQuery } from 'src/modules/TourManagement/services'
import { CircularProgress } from '@mui/material'
import useQueryTourConfig from 'src/modules/TourManagement/hooks/useQueryTourConfig'
import useQuerySearchTourConfig from 'src/modules/TourManagement/hooks/useQuerySearchTourConfig'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { DataTourType, TourSearchConfig } from 'src/modules/TourManagement/interfaces'
import { useForm } from 'react-hook-form'
import { FormFilterTourSchema, FormFilterTourType } from 'src/modules/TourManagement/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import tourServices from 'src/modules/TourManagement/services/Tour/tour.services'
import path from 'src/modules/Share/constants/path'

const TourClientPage = () => {
  const queryTourConfig = useQueryTourConfig(9)
  const querySearchTourConfig = useQuerySearchTourConfig()
  const navigate = useNavigate()
  const getAllToursQuery = new GetAllToursQuery(queryTourConfig)
  const tours = getAllToursQuery.fetch()
  const total = getAllToursQuery.getTotal()
  const [isSearching, setIsSearching] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)
  const [toursSeach, setToursSearch] = useState<DataTourType[]>([])
  const [totalSearch, setTotalSearch] = useState<any>('')
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClosePopover = () => {
    setAnchorEl(null)
  }
  const isOpen = Boolean(anchorEl)
  const id = isOpen ? 'popover' : undefined

  const FilterTourForm = useForm<FormFilterTourType>({
    resolver: yupResolver(FormFilterTourSchema)
  })
  const handleSearch = async (searchParams: TourSearchConfig) => {
    try {
      const response = await tourServices.getToursBySearch(searchParams)
      if (response.data.data) {
        setIsNotFound(false)
        setIsSearching(true)
        setToursSearch(response.data.data)
        setTotalSearch(response.data.total)
      } else {
        setIsSearching(true)
        setIsNotFound(true)
      }
    } catch (error) {
      console.error('Error fetching tours:', error)
    }
  }
  const handleFilterSubmit = (formData: FormFilterTourType) => {
    const searchParams: TourSearchConfig = {}
    if (formData.destination) searchParams.destination = formData.destination
    if (formData.departureLocation) searchParams.departureLocation = formData.departureLocation
    if (formData.period) searchParams.period = formData.period
    if (formData.maxPrice) searchParams.maxPrice = formData.maxPrice
    if (formData.minPrice) searchParams.minPrice = formData.minPrice
    searchParams.limit = '9'
    searchParams.page = querySearchTourConfig.page
    if (Object.keys(searchParams).length > 0) {
      handleSearch(searchParams)
      setIsSearching(true)
      handleClosePopover()
      const newParams = createSearchParams({
        ...queryTourConfig,
        ...searchParams,
        page: '1'
      }).toString()
      navigate(`${path.tour_client}?${newParams}`)
    } else {
      setIsSearching(false)
      const newParams = createSearchParams({
        ...queryTourConfig,
        page: '1'
      })
      navigate(`${path.tour_client}?${newParams}`)
    }
  }
  const handleResetFormFilter = () => {
    FilterTourForm.resetField('destination')
    FilterTourForm.resetField('departureLocation')
    FilterTourForm.resetField('period')
    FilterTourForm.resetField('maxPrice')
    FilterTourForm.resetField('minPrice')
    handleClosePopover()
    setIsSearching(false)
    setIsNotFound(false)
    navigate(path.tour_client)
  }
  const handlePageChange = async (page: number) => {
    try {
      if (isSearching) {
        const response = await tourServices.getToursBySearch({ ...querySearchTourConfig, page: page.toString() })
        if (response.data.data) {
          setIsNotFound(false)
          setIsSearching(true)
          setToursSearch(response.data.data)
          setTotalSearch(response.data.total)
        } else {
          setIsSearching(true)
          setIsNotFound(true)
        }
        const newParams = createSearchParams({
          ...querySearchTourConfig,
          page: page.toString()
        }).toString()
        navigate(`${path.tour_client}?${newParams}`)
      } else {
        const newParams = createSearchParams({
          ...queryTourConfig,
          page: page.toString()
        }).toString()
        navigate(`${path.tour_client}?${newParams}`)
      }
    } catch (error) {
      console.error('Error fetching tours:', error)
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>Tours</title>
        <meta name='description' content='This is home page of the project' />
      </Helmet>
      {tours ? (
        <div className='flex flex-col justify-center items-center mx-auto py-10'>
          <ListTour
            tours={isSearching ? toursSeach : tours}
            total={isSearching ? totalSearch : total}
            queryConfig={isSearching ? querySearchTourConfig : queryTourConfig}
            handleSubmitFormFilter={FilterTourForm.handleSubmit(handleFilterSubmit)}
            register={FilterTourForm.register}
            handleOpenPopover={handleOpenPopover}
            id={id}
            anchorEl={anchorEl}
            isOpen={isOpen}
            handleClosePopover={handleClosePopover}
            control={FilterTourForm.control}
            handleResetFormFilter={handleResetFormFilter}
            handlePageChange={handlePageChange}
            isNotFound={isNotFound}
          />
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-[200px]'>
          <CircularProgress color='secondary' variant='indeterminate' />
        </div>
      )}
    </Fragment>
  )
}

export default TourClientPage
