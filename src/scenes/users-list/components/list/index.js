import React, { useContext } from 'react'
import { Column } from '@Components/grid-layout'
import { dateFormatter } from '@Services/date'
import { RowContent, UserKeyColumn, DateColumn, RowHeader, ListContainer } from './style'
import HeaderItem from './components/header-item'
import GeneralInfoColumn from './components/general-info-column'
import VacationsColumn from './components/vacations-column'
import { sortUpByKey } from '@Services/sort'
import { Context } from '../../../../Context'

const ItemRow = ({ item }) => {
  return (
    <RowContent>
      <Column large={4} medium={4} small={4}>
        <GeneralInfoColumn
          acronym={item.Acronym}
          departmentId={item.DepartmentId}
          firstName={item.FirstName}
          imageUrl={item.ImageUrl}
          jobTitleId={item.JobTitleId}
          lastName={item.LastName}
        />
      </Column>
      <Column large={4} medium={4} small={4}>
        <UserKeyColumn>{item.UserKey}</UserKeyColumn>
      </Column>
      <Column large={4} medium={4} small={4}>
        <VacationsColumn used={item.UsedDays} avaliable={item.AvailableDays} />
      </Column>
      <Column large={4} medium={4} small={4}>
        <DateColumn>{dateFormatter(item.EmployeeStartDate)}</DateColumn>
      </Column>
    </RowContent>
  )
}

const List = ({ items = [], config = [] }) => {
  const { data, setData } = useContext(Context)

  const onOrderList = (direction, key) => {
    if (direction === 'up') {
      setData(sortUpByKey(data, key))
    } else {
      setData(sortUpByKey(data, key).reverse())
    }
  }
  return (
    <>
      <RowHeader>
        {config.map(item => (
          <Column key={item.id} large={4} medium={4} small={4}>
            <HeaderItem itemKey={item.key} onOrder={onOrderList}>{item.name}</HeaderItem>
          </Column>
        ))}
      </RowHeader>
      <ListContainer>
        {items.map(item => <ItemRow key={item.$id} item={item} />)}
      </ListContainer>
    </>
  )
}

export default List
