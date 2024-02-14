import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import useQueryTourConfig from '../../hooks/useQueryTourConfig'
import useSorting from 'src/modules/Share/hooks/useSorting'
import path from 'src/modules/Share/constants/path'
import { GetAllToursQuery } from '../../services'
import TourTable from '../../components/TourTable'
import Pagination from 'src/modules/Share/components/Pagination'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'

const TourPage = () => {
  const queryTourConfig = useQueryTourConfig()

  const navigate = useNavigate()
  const SortTour = useSorting({ queryConfig: queryTourConfig, pathname: path.tour })
  const getAllToursQuery = new GetAllToursQuery()
  const tours = getAllToursQuery.fetch()
  const total = getAllToursQuery.getTotal()
  console.log(tours)

  const onEditTour = (id: string) => {
    navigate(
      {
        pathname: path.edit_tour,
        search: createSearchParams({
          id: id
        }).toString()
      },
      {
        state: queryTourConfig
      }
    )
  }
  return (
    <Fragment>
      <Helmet>
        <title>Tours</title>
        <meta name='description' content='This is tours management page of the project' />
      </Helmet>
      <div className='flex flex-col'>
        <Link
          to={path.create_tour}
          state={queryTourConfig}
          className='flex max-w-max items-end justify-end text-[14px] font-semibold text-white bg-[#26C6DA] px-4 py-2 rounded-lg mb-4'
        >
          Create Tour
        </Link>
        <TourTable
          tours={tours}
          onEditTour={onEditTour}
          onSort={SortTour.handleSort}
          isLoading={getAllToursQuery.isLoading()}
        />
        {total && (
          <Pagination className='flex justify-end' queryConfig={queryTourConfig} total={total} pathname={path.tour} />
        )}
      </div>
    </Fragment>
  )
}

export default TourPage
