import React from 'react';
import { Column, Row } from '../grid-layout'
import GeneralInfoColumn from './components/general-info-column'

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
      <Column large={4}>{item.UserKey}</Column>
      <Column large={4}>HOLA 3</Column>
      <Column large={4}>{item.EmployeeStartDate}</Column>
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
