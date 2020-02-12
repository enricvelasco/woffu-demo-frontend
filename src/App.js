import React, { useContext } from 'react'
import { Context } from './Context'
import Spinner from './components/spinner'
import { GlobalStyle } from './styles/themes/GlobalStyles'
import Header from './components/header'
import Layout from './components/layout'
import UsersList from './scenes/users-list'

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
            <UsersList />
        }
      </Layout>
    </div>
  )
}

export default App
