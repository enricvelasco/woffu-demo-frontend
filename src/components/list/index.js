import React from 'react'
import { Row, UserKeyColumn, DateColumn } from './style'
import GeneralInfoColumn from './components/general-info-column'
import { dateFormatter } from '../../services/date'
import VacationsColumn from './components/vacations-column'
import { Column } from '../grid-layout'

const ItemRow = ({ item }) => {
  return (
    <Row>
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
        <VacationsColumn used={item.UsedDays} avaliable={item.AvailableDays} large={4} medium={4} small={4} />
      </Column>
      <Column large={4} medium={4} small={4}>
        <DateColumn>{dateFormatter(item.EmployeeStartDate)}</DateColumn>
      </Column>
    </Row>
  )
}

const List = ({ items = [], columns, config = [] }) => {
  return (
    <>
      <div>
        {config.map(item => <p>{item.$id}-{item.FirstName}</p>)}
      </div>
      <div>
        {items.map(item => <ItemRow key={item.$id} item={item} />)}
      </div>
    </>
  )
}

export default List
