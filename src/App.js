import React from 'react'
import { GlobalStyle } from '@Styles/themes/GlobalStyles'
import Header from '@Components/header'
import Layout from '@Components/layout'
import UsersList from '@Scenes/users-list'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Layout>
        <UsersList />
      </Layout>
    </div>
  )
}

export default App
