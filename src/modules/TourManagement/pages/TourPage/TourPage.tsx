import { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useQueryTourConfig from '../../hooks/useQueryTourConfig'
import useSorting from 'src/modules/Share/hooks/useSorting'
import path from 'src/modules/Share/constants/path'
import { GetAllToursQuery } from '../../services'
import TourTable from '../../components/TourTable'
import Pagination from 'src/modules/Share/components/Pagination'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import InputSearch from 'src/modules/Share/components/InputSearch'
import Button from 'src/modules/Share/components/Button'
import { Popover } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormFilterTourSchema, FormFilterTourType } from '../../utils/rules/filter_tour.rules'
import { yupResolver } from '@hookform/resolvers/yup'
import FilterListTour from 'src/modules/Landingpage/components/FilterListTour/FilterListTour'
import { DataTourType, TourSearchConfig } from '../../interfaces'
import tourServices from '../../services/Tour/tour.services'
import useQuerySearchTourConfig from '../../hooks/useQuerySearchTourConfig'

const TourPage = () => {
  const queryTourConfig = useQueryTourConfig()
  const querySearchTourConfig = useQuerySearchTourConfig()
  const navigate = useNavigate()
  const SortTour = useSorting({ queryConfig: queryTourConfig, pathname: path.tour })
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
  const onEditTour = (id: string) => {
    navigate(
      {
        pathname: path.edit_tour,
        search: createSearchParams({
          id: id
        }).toString()
      },
      {
        state: { ...(isSearching ? querySearchTourConfig : queryTourConfig), isSearching }
      }
    )
  }

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
    searchParams.limit = querySearchTourConfig.limit
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
      navigate(`${path.tour}?${newParams}`)
    } else {
      setIsSearching(false)
      const newParams = createSearchParams({
        ...queryTourConfig,
        page: '1'
      })
      navigate(`${path.tour}?${newParams}`)
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
    navigate(path.tour)
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
        navigate(`${path.tour}?${newParams}`)
      } else {
        const newParams = createSearchParams({
          ...queryTourConfig,
          page: page.toString()
        }).toString()
        navigate(`${path.tour}?${newParams}`)
      }
    } catch (error) {
      console.error('Error fetching tours:', error)
    }
  }
  return (
    <Fragment>
      <Helmet>
        <title>Tours</title>
        <meta name='description' content='This is tours management page of the project' />
      </Helmet>
      <div className='flex flex-col justify-center '>
        <div className='flex w-full justify-between items-center pt-[16px] pb-[40px] font-normal relative '>
          <form onSubmit={FilterTourForm.handleSubmit(handleFilterSubmit)}>
            <InputSearch
              classNameInput='bg-white border-[1px] rounded-md md:h-[44px] md:w-[500px] max-md:h-[30px] max-md:w-[250px] outline-none pl-8 pr-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] font-normal text-gray-600 placeholder:font-normal placeholder:text-[14px] max-md:placeholder:text-[12px]'
              name='destination'
              placeholder='Search'
              register={FilterTourForm.register}
            />
          </form>
          <div className='w-full flex justify-end mx-auto gap-4 '>
            <Button
              onClick={handleOpenPopover}
              classNameButton='flex items-center gap-1 text-[14px] font-semibold text-white bg-[#26C6DA] px-4 py-2 max-md:px-3 rounded-lg cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-4 max-md:h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
                />
              </svg>
              <span className='max-md:text-[12px]'>Filter</span>
            </Button>
            <Popover
              id={id}
              open={isOpen}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              anchorReference='anchorEl'
            >
              <form onSubmit={FilterTourForm.handleSubmit(handleFilterSubmit)}>
                <FilterListTour tours={tours} control={FilterTourForm.control} onResetForm={handleResetFormFilter} />
              </form>
            </Popover>
            <Link
              to={path.create_tour}
              state={queryTourConfig}
              className='flex  items-end justify-end text-[14px] font-semibold text-white bg-[#26C6DA] px-4 py-2 rounded-lg '
            >
              Create Tour
            </Link>
          </div>
        </div>
        {isNotFound ? (
          <div className='flex w-full items-center justify-center min-h-[500px]'>
            <div className='text-center'>
              <div className='inline-flex rounded-full bg-[#c6f8ff] p-4 overflow-hidden'>
                <svg xmlns='http://www.w3.org/2000/svg' id='calendar' className='w-16 h-16'>
                  <path d='M53 5h-8v4H19V5h-8v4H0v50h64V9H53V5zm-6 2h4v6h-4V7zM13 7h4v6h-4V7zM2 57V19h60v38H2zm60-46v6H2v-6h9v4h8v-4h26v4h8v-4h9z'></path>
                </svg>
              </div>
              <h1 className='mt-5 lg:text-[40px] md:text-[20px] max-md:text-[14px] font-bold text-slate-800'>
                No tours found
              </h1>
            </div>
          </div>
        ) : (
          <TourTable
            tours={isSearching ? toursSeach : tours}
            onEditTour={onEditTour}
            onSort={SortTour.handleSort}
            isLoading={getAllToursQuery.isLoading()}
          />
        )}

        {total && (
          <Pagination
            className='flex justify-end'
            queryConfig={isSearching ? querySearchTourConfig : queryTourConfig}
            total={isSearching ? totalSearch : total}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </Fragment>
  )
}

export default TourPage
