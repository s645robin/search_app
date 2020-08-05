import React from 'react'

const ResultItemComponent = (props) => {
  const {
    result: {
      link,
      title,
      snippet
    }
  } = props

  return (
    <div>
      <h6>{link}</h6>
      <h1>{title}</h1>
      <p>{snippet}</p>
    </div>
  )
}

export default ResultItemComponent
