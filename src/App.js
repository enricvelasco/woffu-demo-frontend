import React, { useContext } from 'react'
import { Context } from './Context'
import Spinner from '@Components/spinner'
import { GlobalStyle } from '@Styles/themes/GlobalStyles'
import Header from '@Components/header'
import Layout from '@Components/layout'
import UsersList from '@Scenes/users-list'

const App = () => {
  const { data, isLoading } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Layout>
        {
          isLoading
            ? <Spinner />
            : <UsersList />
        }
      </Layout>
    </div>
  )
}

export default App
