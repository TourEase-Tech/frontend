import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import useQueryTourConfig from '../../hooks/useQueryTourConfig'
import useSorting from 'src/modules/Share/hooks/useSorting'
import path from 'src/modules/Share/constants/path'
import { GetAllToursQuery } from '../../services'
import TourTable from '../../components/TourTable'
import Pagination from 'src/modules/Share/components/Pagination'

const TourPage = () => {
  const queryTourConfig = useQueryTourConfig()

  const SortTour = useSorting({ queryConfig: queryTourConfig, pathname: path.tour })
  const getAllToursQuery = new GetAllToursQuery()
  const tours = getAllToursQuery.fetch()
  const total = getAllToursQuery.getTotal()
  return (
    <Fragment>
      <Helmet>
        <title>Tours</title>
        <meta name='description' content='This is tours management page of the project' />
      </Helmet>
      <TourTable tours={tours} onSort={SortTour.handleSort} isLoading={getAllToursQuery.isLoading()} />
      {total && (
        <Pagination className='flex justify-end' queryConfig={queryTourConfig} total={total} pathname={path.tour} />
      )}
    </Fragment>
  )
}

export default TourPage
