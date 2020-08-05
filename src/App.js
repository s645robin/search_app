import React from 'react'

import SearchComponent from './components/search_component'
import Result from './containers/Result'

function App () {
  const [query, setQuery] = React.useState('')

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className='App'>
      <SearchComponent
        query={query}
        handleQueryChange={handleQueryChange}
      />
      <Result query={query} />
    </div>
  )
}

export default App
