import { Fragment } from 'react'
import HomeContainer from '../../components/HomeContainer'
import HomeFooter from '../../components/HomeFooter'
import HomeHeader from '../../components/HomeHeader'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Tourease</title>
        <meta name='description' content='This is home page of the project' />
      </Helmet>
      <div className='relative flex flex-col justify-center items-center mx-auto'>
        <HomeHeader />
        <HomeContainer />
        <HomeFooter />
      </div>
    </Fragment>
  )
}

export default HomePage
