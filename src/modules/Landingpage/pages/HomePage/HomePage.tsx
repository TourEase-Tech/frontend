import HomeContainer from '../../components/HomeContainer'
import HomeFooter from '../../components/HomeFooter'
import HomeHeader from '../../components/HomeHeader'

const HomePage = () => {
  return (
    <div className='relative flex flex-col justify-center items-center mx-auto'>
      <HomeHeader />
      <HomeContainer />
      <HomeFooter />
    </div>
  )
}

export default HomePage
