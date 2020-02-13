import React from 'react'
import { VacationsCol } from './style'
import Percentage from './components/percentage'

const VacationsColumn = ({ used, avaliable }) => (
  <VacationsCol>
    <Percentage used={used} avaliable={avaliable} />
  </VacationsCol>
)

export default VacationsColumn
