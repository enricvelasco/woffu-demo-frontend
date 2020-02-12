import React, { useContext } from 'react'
import { Context } from './Context'
import Spinner from './components/spinner'
import { GlobalStyle } from './styles/themes/GlobalStyles'
import Header from './components/header'
import Layout from './components/layout'

const App = () => {
  const { data, isLoading } = useContext(Context)
  console.log('DATA:', data, isLoading)
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Layout>
        {
          isLoading ?
            <Spinner/>
            :
            <p>DEMO</p>
        }
      </Layout>
    </div>
  )
}

export default App
