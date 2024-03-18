import { DataTourType } from 'src/modules/TourManagement/interfaces'
import CardTour from '../CardTour'
import { Fragment } from 'react'
import Pagination from 'src/modules/Share/components/Pagination'
import InputSearch from 'src/modules/Share/components/InputSearch'
import { Control, UseFormRegister } from 'react-hook-form'
import Button from 'src/modules/Share/components/Button'
import { Popover } from '@mui/material'
import FilterListTour from '../FilterListTour/FilterListTour'
import { FormFilterTourType } from 'src/modules/TourManagement/utils'
interface Props {
  tours: DataTourType[]
  total: number
  queryConfig: any
  handleSubmitFormFilter: React.FormEventHandler<HTMLFormElement>
  register: UseFormRegister<any>
  handleOpenPopover: React.MouseEventHandler<HTMLButtonElement>
  id: string | undefined
  isOpen: boolean
  anchorEl: HTMLButtonElement | null
  handleClosePopover: () => void
  control: Control<FormFilterTourType>
  handleResetFormFilter: () => void
  handlePageChange: (page: number) => Promise<void>
  isNotFound: boolean
}
const ListTour = ({
  tours,
  total,
  queryConfig,
  handleSubmitFormFilter,
  register,
  handleOpenPopover,
  id,
  isOpen,
  anchorEl,
  handleClosePopover,
  control,
  handleResetFormFilter,
  handlePageChange,
  isNotFound
}: Props) => {
  // const navigate = useNavigate()
  // const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  // const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleClosePopover = () => {
  //   setAnchorEl(null)
  // }
  // const isOpen = Boolean(anchorEl)
  // const id = isOpen ? 'popover' : undefined

  // const querySearchTourConfig = useQuerySearchTourConfig()
  // const FilterTourForm = useForm<FormFilterTourType>({
  //   resolver: yupResolver(FormFilterTourSchema)
  // })
  // const handleSubmitFormFilter = FilterTourForm.handleSubmit((data) => {
  //   const config = {
  //     ...querySearchTourConfig,
  //     destination: data.destination,
  //     departureLocation: data.departureLocation,
  //     period: data.period,
  //     maxPrice: data.maxPrice,
  //     minPrice: data.minPrice
  //   }

  //   const isAnyFieldFilled = Object.values(data).some((value) => !!value)

  //   if (isAnyFieldFilled) {
  //     const filteredConfig = Object.fromEntries(Object.entries(config).filter(([_, value]) => value !== undefined))
  //     navigate({
  //       pathname: path.tour_client_search,
  //       search: `?${new URLSearchParams(filteredConfig as any).toString()}`
  //     })
  //   } else {
  //     handleClosePopover()
  //     return
  //   }
  // })

  // const handleResetFormFilter = () => {
  //   FilterTourForm.resetField('destination')
  //   FilterTourForm.resetField('departureLocation')
  //   FilterTourForm.resetField('period')
  //   FilterTourForm.setValue('maxPrice', '')
  //   FilterTourForm.setValue('minPrice', '')
  // }
  return (
    <Fragment>
      <div className='mb-10'>
        <div className='flex justify-center items-center pt-[16px] pb-[40px] font-normal relative '>
          <form onSubmit={handleSubmitFormFilter}>
            <InputSearch
              classNameInput='bg-white border-[1px] rounded-md md:h-[44px] md:w-[500px] max-md:h-[30px] max-md:w-[250px] outline-none pl-8 pr-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] font-normal text-gray-600 placeholder:font-normal placeholder:text-[14px] max-md:placeholder:text-[12px]'
              name='destination'
              placeholder='Search'
              register={register}
            />
          </form>
          <div className='w-full flex justify-end mx-auto ml-2 '>
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
              <form onSubmit={handleSubmitFormFilter}>
                <FilterListTour tours={tours} control={control} onResetForm={handleResetFormFilter} />
              </form>
            </Popover>
          </div>
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
        <div className=''>
          <div className='grid grid-cols-3 max-md:grid-cols-2 lg:gap-12 md:gap-6 max-md:gap-2 mx-auto xl:px-36 lg:px-20 md:px-14 max-md:px-5'>
            {tours && tours.length > 0 && tours.map((tour, index) => <CardTour tour={tour} key={index} />)}
          </div>
          {total && (
            <Pagination
              className='flex justify-center'
              queryConfig={queryConfig}
              total={total}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </Fragment>
  )
}

export default ListTour
