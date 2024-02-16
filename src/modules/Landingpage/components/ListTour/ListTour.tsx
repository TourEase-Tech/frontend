import { ToursListType } from 'src/modules/TourManagement/interfaces'
import CardTour from '../CardTour'
import { Fragment } from 'react'
import Pagination from 'src/modules/Share/components/Pagination'
import useQueryTourConfig from 'src/modules/TourManagement/hooks/useQueryTourConfig'
import path from 'src/modules/Share/constants/path'
interface Props {
  tours: ToursListType
  total: number
}
const ListTour = ({ tours, total }: Props) => {
  const queryTourConfig = useQueryTourConfig()

  return (
    <Fragment>
      <div className='grid grid-cols-3 max-md:grid-cols-2 lg:gap-12 md:gap-6 max-md:gap-2 mx-auto xl:px-36 lg:px-20 md:px-14 max-md:px-5'>
        {tours &&
          tours.data.data.length > 0 &&
          tours.data.data.map((tour, index) => <CardTour tour={tour} key={index} />)}
      </div>
      {tours && tours.data.data.length > 0 && (
        <Pagination
          queryConfig={{ ...queryTourConfig, limit: 9 }}
          total={total}
          pathname={path.tour_client}
          className='flex justify-center'
        />
      )}
    </Fragment>
  )
}

export default ListTour
