import React, { createContext, useState } from 'react'
import { userCredentials } from '@Utils/credentials'
import { usersUrl } from '@Utils/urls'
import { mock } from '@Utils/demo-mock'
import { createAutorizationHeader } from '@Services/header'
import { getApiInfo } from '@Services/data'

export const Context = createContext()

const Provider = ({ children }) => {
  const getData = () => {
    setIsLoading(true)
    getApiInfo(usersUrl, createAutorizationHeader(userCredentials.userName, userCredentials.password))
      .then(response => {
        setIsLoading(false)
        setData(response)
      })
  }

  const [isLoading, setIsLoading] = useState(false)
  const [isErrorPage, setIsErrorPage] = useState(false)
  const [data, setData] = useState(() => getData())
  //const [data, setData] = useState(mock)

  const value = {
    data,
    isLoading,
    isErrorPage,
    reloadData: () => {
      getData()
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
