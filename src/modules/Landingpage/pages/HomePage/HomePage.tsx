import { Fragment, useContext } from 'react'
import HomeContainer from '../../components/HomeContainer'
import HomeFooter from '../../components/HomeFooter'
import HomeHeader from '../../components/HomeHeader'
import { Helmet } from 'react-helmet-async'
import { GetProfileQuery } from 'src/modules/Share/services'
import { AppContext } from 'src/modules/Share/contexts'

const HomePage = () => {
  const { isAuthenticated } = useContext(AppContext)

  const getProfileQuery = new GetProfileQuery(isAuthenticated)
  const profile = getProfileQuery.fetch()?.data
  console.log(profile?.role)

  return (
    <Fragment>
      <Helmet>
        <title>Tourease</title>
        <meta name='description' content='This is home page of the project' />
      </Helmet>
      <div className='relative flex flex-col justify-center items-center mx-auto'>
        <HomeHeader profile={profile} />
        <HomeContainer />
        <HomeFooter />
      </div>
    </Fragment>
  )
}

export default HomePage
