import { useContext } from 'react'
import HomeFooter from 'src/modules/Landingpage/components/HomeFooter'
import HomeHeader from 'src/modules/Landingpage/components/HomeHeader'
import { AppContext } from '../../contexts'
import { GetProfileQuery } from '../../services'

interface Props {
  children?: React.ReactNode
}
const HomeLayout = ({ children }: Props) => {
  const { isAuthenticated } = useContext(AppContext)
  const getProfileQuery = new GetProfileQuery(isAuthenticated)
  const profile = getProfileQuery.fetch()?.data
  return (
    <div>
      <HomeHeader profile={profile} />
      {children}
      <HomeFooter />
    </div>
  )
}

export default HomeLayout
