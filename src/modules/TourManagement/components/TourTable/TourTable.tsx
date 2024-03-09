import HeaderTable from 'src/modules/Share/components/HeaderTable'
import { DataTourType } from '../../interfaces'
import { TourTableHeader } from '../../constants'
import { formatDateTimeVN } from 'src/modules/Share/utils'
import { Skeleton } from '@mui/material'

interface Props {
  tours: DataTourType[]
  onEditTour: (id: string) => void
  onSort: (column: string) => void
  isLoading: boolean
}
const TourTable = ({ tours, onEditTour, isLoading, onSort }: Props) => {
  return (
    <div>
      <table className='w-full bg-white text-left border-[1px] border-gray-200 p-2'>
        <HeaderTable header={TourTableHeader} onSort={onSort} />
        <tbody>
          {isLoading
            ? Array(10)
                .fill(0)
                .map((_, index) => (
                  <tr
                    className='text-[14px] text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-50'
                    key={index}
                  >
                    <th className='px-2 py-4 font-medium w-[30%]'>
                      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />{' '}
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />{' '}
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />{' '}
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />{' '}
                    </th>
                  </tr>
                ))
            : tours &&
              tours.map((tour) => (
                <tr
                  className='text-[14px] text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-50'
                  key={tour.id}
                  onClick={() => onEditTour(tour.id)}
                >
                  <th className='px-2 py-4 font-medium w-[30%] text-center'>
                    <span className='line-clamp-2 '>{tour.name}</span>
                  </th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center'>{tour.departureLocation}</th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center overflow-hidden'>
                    <span className='truncate'>{tour.destination}</span>
                  </th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center'>{formatDateTimeVN(tour.departureDay)}</th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center truncate'>
                    {Number(tour.price).toLocaleString()} VND
                  </th>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}

export default TourTable
