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
        response.code === 200 ? setData(response.content) : setHasError(response)
      })
  }

  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [data, setData] = useState(() => getData())
  //const [data, setData] = useState(mock)
  const [filteredData, setFilteredData] = useState(null)

  const value = {
    data,
    filteredData,
    isLoading,
    hasError,
    setData: (val) => { setData(val) },
    setFilteredData: (val) => { setFilteredData(val) },
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
