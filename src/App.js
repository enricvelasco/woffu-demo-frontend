import React, { useContext } from 'react'
import { Context } from './Context'
import Spinner from './components/spinner'
import { GlobalStyle } from './styles/themes/GlobalStyles'

const App = () => {
  const { data, isLoading } = useContext(Context)
  console.log('DATA:', data, isLoading)
  return (
    <div>
      <GlobalStyle />
      <h1>Hi this is React Starter!!</h1>
      {isLoading && <Spinner/>}
      <p>DEMO</p>
    </div>
  )
}

export default App
