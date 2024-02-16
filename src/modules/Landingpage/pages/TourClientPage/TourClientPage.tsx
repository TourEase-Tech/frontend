import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import ListTour from '../../components/ListTour'
import { GetAllToursQuery } from 'src/modules/TourManagement/services'

const TourClientPage = () => {
  const getAllTourQuery = new GetAllToursQuery()
  const tours = getAllTourQuery.fetch()
  return (
    <Fragment>
      <Helmet>
        <title>Tours</title>
        <meta name='description' content='This is home page of the project' />
      </Helmet>
      <div className='flex flex-col justify-center items-center mx-auto py-10'>
        <ListTour tours={tours} total={getAllTourQuery.getTotal()} />
      </div>
    </Fragment>
  )
}

export default TourClientPage
