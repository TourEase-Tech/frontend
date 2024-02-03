import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

interface Props {
  children?: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <div className='flex relative'>
      <SideBar />
      <div className='ml-[250px] p-6 w-full flex flex-col flex-1'>
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
