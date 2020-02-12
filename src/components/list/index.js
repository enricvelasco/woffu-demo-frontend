import React from 'react';
import { Column } from '../grid-layout'
import { Row, UserKeyColumn, DateColumn } from './style'
import GeneralInfoColumn from './components/general-info-column'
import { dateFormatter } from '../../services/date'

const ItemRow = ({ item }) => {
  return (
    <Row>
      <GeneralInfoColumn
        acronym={item.Acronym}
        departmentId={item.DepartmentId}
        firstName={item.FirstName}
        imageUrl={item.ImageUrl}
        jobTitleId={item.JobTitleId}
        lastName={item.LastName}
        large={4}
      />
      <UserKeyColumn large={4}>{item.UserKey}</UserKeyColumn>
      <Column large={4}>HOLA 3</Column>
      <DateColumn large={4}>{dateFormatter(item.EmployeeStartDate)}</DateColumn>
    </Row>
  )
}

const List = ({ items = [], columns, config=[] }) => {
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
