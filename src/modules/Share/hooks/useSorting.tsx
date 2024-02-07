/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSearchParams, useNavigate } from 'react-router-dom'
import _ from 'lodash'

interface Props {
  queryConfig: any
  pathname: string
}

const useSorting = ({ queryConfig, pathname }: Props) => {
  const navigate = useNavigate()

  const handleSort = (column: string) => {
    let config = {}

    if (queryConfig.sort === column) {
      config = {
        ...queryConfig,
        sort: column
      }
    } else {
      config = {
        ...queryConfig,
        sort: column
      }
    }

    if (queryConfig.sort === column) {
      config = _.omit(config, 'sort')
    }

    navigate({
      pathname: pathname,
      search: createSearchParams(config).toString()
    })
  }

  return { handleSort }
}

export default useSorting
