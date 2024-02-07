import HeaderTable from 'src/modules/Share/components/HeaderTable'
import { ToursListType } from '../../interfaces'
import { Avatar } from '@mui/material'
import Skeleton from 'react-loading-skeleton'
import { TourTableHeader } from '../../constants'
import { formatDateTimeVN } from 'src/modules/Share/utils'

interface Props {
  tours: ToursListType
  onSort: (column: string) => void
  isLoading: boolean
}
const TourTable = ({ tours, isLoading, onSort }: Props) => {
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
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                    <th className='px-2 py-4 font-medium w-[17%]'>
                      <Skeleton className='h-[16px]' borderRadius={20} />
                    </th>
                  </tr>
                ))
            : tours &&
              tours.data.data.map((tour) => (
                <tr
                  className='text-[14px] text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-50'
                  key={tour.id}
                  onClick={() => {}}
                >
                  <th className='px-2 py-4 font-medium w-[80%] flex gap-5 items-center'>
                    <Avatar />
                    <span className='line-clamp-2'>{tour.name}</span>
                  </th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center'>{tour.departureLocation}</th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center'>{tour.destination}</th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center'>{formatDateTimeVN(tour.departureDay)}</th>
                  <th className='px-2 py-4 font-medium w-[17%] text-center truncate'>{tour.price}</th>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}

export default TourTable
