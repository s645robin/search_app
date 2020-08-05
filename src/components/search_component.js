import React from 'react'

const SearchComponent = (props) => {
  const {
    query,
    handleQueryChange
  } = props

  return (
    <div>
      <input value={query} onChange={handleQueryChange} />
    </div>
  )
}

export default SearchComponent
