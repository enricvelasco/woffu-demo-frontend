import React, { useState, useEffect, useContext } from 'react'
import DateInput from '@Components/date-input'
import { Container, FilterContainer, FilterContainerText, InputContainer } from './style'
import { Context } from '../../../../Context'
import { filterByDate } from '@Services/date'

const FilterHeader = () => {
  const { data, setFilteredData, isLoading } = useContext(Context)

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const setFilter = () => {
    const filtered = filterByDate(data, startDate, endDate)
    setFilteredData(filtered)
  }

  useEffect(() => {
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
        <InputContainer>
          <DateInput max={endDate} onChangeDate={date => setStartDate(date)} />
          <DateInput min={startDate} onChangeDate={date => setEndDate(date)} />
        </InputContainer>
      </FilterContainer>
    </Container>
  )
}

export default FilterHeader
