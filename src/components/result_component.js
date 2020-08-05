import React from 'react'

import ResultItemComponent from './result_item_component'

const ResultComponent = (props) => {
  const {
    results
  } = props

  const element = React.useMemo(() => {
    return results.map((result, index) => (
      <ResultItemComponent key={index} result={result} />
    ))
  }, [results])

  return element
}

export default ResultComponent
