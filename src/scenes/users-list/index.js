import React, { useContext } from 'react'
import List from './components/list'
import FilterHeader from './components/filter-header'
import { Context } from '../../Context'

const headerItems = [
  {
    id: 1,
    name: 'Información personal'
  },
  {
    id: 2,
    name: 'ID'
  },
  {
    id: 3,
    name: 'Vacaciones'
  },
  {
    id: 4,
    name: 'Fecha de incorporación a la empresa'
  },
]

const UsersList = () => {
  const { data } = useContext(Context)
  return (
    <>
      <FilterHeader />
      <List items={data} config={headerItems} />
    </>
  )
}

export default UsersList
