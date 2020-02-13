import React, { useContext } from 'react'
import List from './components/list'
import FilterHeader from './components/filter-header'
import { Context } from '../../Context'

const headerItems = [
  {
    id: 1,
    name: 'Información personal',
    key: 'FirstName'
  },
  {
    id: 2,
    name: 'ID',
    key: 'UserKey'
  },
  {
    id: 3,
    name: 'Vacaciones',
    key: 'UsedDays'
  },
  {
    id: 4,
    name: 'Fecha de incorporación a la empresa',
    key: 'EmployeeStartDate'
  }
]

const UsersList = () => {
  const { data, filteredData } = useContext(Context)
  const itemsList = filteredData ? filteredData : data

  return (
    <>
      <FilterHeader />
      <List items={itemsList} config={headerItems} />
    </>
  )
}

export default UsersList
