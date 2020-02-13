import React, { useState, useEffect, useContext } from 'react'
import DateInput from '@Components/date-input'
import { Container, FilterContainer, FilterContainerText, InputContainer } from './style'
import { Context } from '../../../../Context'

const FilterHeader = () => {
  const { data, isLoading } = useContext(Context)

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const setFilter = () => {
    console.log('HACER FILTRO')
  }

  useEffect(() => {
    //console.log('USE EFFECT', startDate, endDate, 'DATA:', data)
    data && setFilter()
  }, [startDate, endDate])

  return (
    <Container>
      <div>
        EQUIPO
      </div>
      <FilterContainer>
        <FilterContainerText>
          Filtrar por fecha de incorporación
        </FilterContainerText>
        <InputContainer onSubmit={() => console.log('onSubmit')}>
          <DateInput max={endDate} onChangeDate={date => setStartDate(date)} />
          <DateInput min={startDate} onChangeDate={date => setEndDate(date)} />
        </InputContainer>
      </FilterContainer>
    </Container>
  )
}

export default FilterHeader
