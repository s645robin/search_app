import React from 'react'

import axios from 'axios'

import ResultComponent from '../components/result_component'
import PaginationComponent from '../components/pagination_component'

import {
  isEmpty
} from 'lodash'

import constants from '../constants'

const Result = (props) => {
  const [data, setData] = React.useState([])
  const [filteredResult, setFilteredResult] = React.useState([])

  React.useEffect(() => {
    fetchData(props.query)
  }, [props.query])

  const fetchData = async (query) => {
    try {
      const apiResult = await axios.get(`${constants.API_BASE_URL}${query}`)
      if (apiResult.data && !isEmpty(apiResult.data.items)) {
        setData(apiResult.data.items)
        setFilteredResult(apiResult.data.items.slice(0, constants.RESULTS_PER_PAGE))
      } else {
        // result is empty
        console.log('empty result')
      }
    } catch (err) {
      console.error('error in fetching api :- ', err)
    }
  }

  const handlePagination = React.useCallback((pageNumber) => {
    // now filter data as per pagination limit
    const startIndex = ((pageNumber - 1) * (constants.RESULTS_PER_PAGE))
    setFilteredResult(data.slice(startIndex, startIndex + constants.RESULTS_PER_PAGE))
  }, [data])

  return (
    <>
      <ResultComponent
        results={filteredResult}
      />
      <PaginationComponent
        total={data.length}
        handlePagination={handlePagination}
      />
    </>
  )
}

export default Result
