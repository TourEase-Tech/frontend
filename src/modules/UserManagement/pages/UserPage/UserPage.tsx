import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'

const UserPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Users</title>
        <meta name='description' content='This is user management page of the project' />
      </Helmet>
      <div className='flex justify-between items-center pt-[16px] pb-[40px] font-normal'>
        <form onSubmit={() => {}}></form>
      </div>
    </Fragment>
  )
}
export default UserPage
