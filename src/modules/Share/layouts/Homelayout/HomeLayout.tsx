interface Props {
  children?: React.ReactNode
}
const HomeLayout = ({ children }: Props) => {
  return <div className='bg-[#a1c19c]'>{children}</div>
}

export default HomeLayout
