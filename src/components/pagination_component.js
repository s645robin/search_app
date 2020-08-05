import React from 'react'

import styles from '../styles'

import constants from '../constants'

const PaginationComponent = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const {
    total,
    handlePagination
  } = props

  const handlePageClick = (page) => {
    handlePagination(page)
    setCurrentPage(page)
  }

  // having pagination of 3 results in a single page
  const pageElement = React.useMemo(() => {
    const totalPage = Math.ceil(total / constants.RESULTS_PER_PAGE)

    const element = []

    for (let i = 1; i <= totalPage; i++) {
      element.push(
        <div style={currentPage === i ? styles.pageButton : null} onClick={() => handlePageClick(i)}>
          <h1 key={i}>{i}</h1>
        </div>
      )
    }

    return element
  }, [total, currentPage])

  return (
    <div>
      {pageElement}
    </div>
  )
}

export default PaginationComponent
