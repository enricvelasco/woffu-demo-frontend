import React, { useState, useEffect } from 'react'
import DateInput from '@Components/date-input'
import { Container, FilterContainer, FilterContainerText, InputContainer } from './style'

const FilterHeader = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    console.log('USE EFFECT', startDate, endDate)
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
        <InputContainer>
          <DateInput max={endDate} onChangeDate={date => setStartDate(date)} />
        </InputContainer>
        <InputContainer>
          <DateInput min={startDate} onChangeDate={date => setEndDate(date)} />
        </InputContainer>
      </FilterContainer>
    </Container>
  )
}

export default FilterHeader
