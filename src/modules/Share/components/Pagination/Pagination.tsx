/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames'
import Button from '../Button'

interface Props {
  queryConfig: any
  total: number
  className: string
  handlePageChange: (page: number) => void
}

const RANGE = 2

const Pagination = ({ queryConfig, total, className, handlePageChange }: Props) => {
  const page = Number(queryConfig.page)
  const pageSize = Math.ceil(total / queryConfig.limit)

  const renderPagination = () => {
    let dotBefore = false
    let dotAfter = false

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span
            key={index}
            className='mx-1 border-[1px] border-gray-200 rounded flex h-8 w-8 items-center justify-center text-gray-600 shadow-sm'
          >
            ...
          </span>
        )
      }
      return null
    }

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span
            key={index}
            className='mx-1 border-[1px] border-gray-200 rounded flex h-8 w-8 items-center justify-center text-gray-600 shadow-sm'
          >
            ...
          </span>
        )
      }
      return null
    }

    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1

        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber > RANGE && pageNumber < page - RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index)
        }

        return (
          <Button
            classNameButton={classNames(
              'mx-1 flex h-8 w-8 cursor-pointer items-center justify-center text-center text-gray-600 shadow-sm rounded border-[1px]',
              {
                'bg-[#26C6DA]/30  border-[#26C6DA]': pageNumber === page,
                'border-x-gray-200': pageNumber !== page
              }
            )}
            onClick={() => handlePageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </Button>
        )
      })
  }

  return (
    <div className={className}>
      <div className='mt-6 flex flex-wrap justify-center'>
        {page === 1 ? (
          <span className='mx-1 border-[1px] border-gray-200 rounded flex h-8 w-8 cursor-not-allowed items-center justify-center text-gray-600 shadow-sm bg-gray-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-4 w-4 text-[#26C6DA]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </span>
        ) : (
          <Button
            classNameButton='mx-1 border-[1px] border-gray-200 rounded flex h-8 w-8 cursor-pointer items-center justify-center text-gray-600 shadow-sm hover:bg-gray-100'
            onClick={() => handlePageChange(page - 1)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-4 w-4 text-[#26C6DA]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </Button>
        )}

        {renderPagination()}

        {page === pageSize ? (
          <span className='mx-1 border-[1px] border-gray-200 rounded flex h-8 w-8 cursor-not-allowed items-center justify-center  text-gray-600 shadow-sm bg-gray-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-4 w-4 text-[#26C6DA]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </span>
        ) : (
          <Button
            classNameButton='mx-1 border-[1px] border-gray-200 rounded flex h-8 w-8 cursor-pointer items-center justify-center text-gray-600 shadow-sm hover:bg-gray-100'
            onClick={() => handlePageChange(page + 1)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-4 w-4 text-[#26C6DA]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </Button>
        )}
      </div>
    </div>
  )
}

export default Pagination
