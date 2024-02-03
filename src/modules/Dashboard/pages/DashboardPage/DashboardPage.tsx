import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'

const DashboardPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Dashboard</title>
        <meta name='description' content='This is dashboard page of the project' />
      </Helmet>
    </Fragment>
  )
}

export default DashboardPage
