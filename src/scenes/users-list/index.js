import React, { useContext } from 'react'
import List from './components/list'
import FilterHeader from './components/filter-header'
import { Context } from '../../Context'

const UsersList = () => {
  const { data } = useContext(Context)
  return (
    <>
      <FilterHeader />
      <List items={data} />
    </>
  )
}

export default UsersList
