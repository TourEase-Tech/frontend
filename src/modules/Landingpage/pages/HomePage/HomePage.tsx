import { Fragment } from 'react'
import HomeContainer from '../../components/HomeContainer'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Tourease</title>
        <meta name='description' content='This is home page of the project' />
      </Helmet>
      <div className='flex flex-col justify-center items-center mx-auto bg-main-pattern bg-cover'>
        <HomeContainer />
      </div>
    </Fragment>
  )
}

export default HomePage
