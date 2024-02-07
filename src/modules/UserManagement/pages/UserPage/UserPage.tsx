import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import useQueryUserConfig from '../../hooks/useQueryUserConfig'
import path from 'src/modules/Share/constants/path'
import useSorting from 'src/modules/Share/hooks/useSorting'
import { GetAllUsersQuery } from '../../services'
import UserTable from '../../components/UserTable'
import Pagination from 'src/modules/Share/components/Pagination'

const UserPage = () => {
  const queryUserConfig = useQueryUserConfig()

  const SortUSer = useSorting({ queryConfig: queryUserConfig, pathname: path.user })
  const getAllUsersQuery = new GetAllUsersQuery()
  const users = getAllUsersQuery.fetch()
  const total = getAllUsersQuery.getTotal()
  return (
    <Fragment>
      <Helmet>
        <title>Users</title>
        <meta name='description' content='This is user management page of the project' />
      </Helmet>
      <div className='flex justify-between items-center pt-[16px] pb-[40px] font-normal'>
        <form onSubmit={() => {}}></form>
      </div>
      <UserTable users={users} onSort={SortUSer.handleSort} isLoading={getAllUsersQuery.isLoading()} />
      {total && (
        <Pagination
          className='flex justify-end'
          queryConfig={queryUserConfig}
          total={getAllUsersQuery.getTotal()}
          pathname={path.user}
        />
      )}
    </Fragment>
  )
}
export default UserPage
