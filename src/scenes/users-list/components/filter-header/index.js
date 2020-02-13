import React, { useState, useEffect, useContext } from 'react'
import DateInput from '@Components/date-input'
import { Container, FilterContainer, FilterContainerText, InputContainer, Team } from './style'
import { Context } from '../../../../Context'
import { filterByDate } from '@Services/date'

const isNullDate = (start, end) => !start && !end

const FilterHeader = () => {
  const { data, setFilteredData } = useContext(Context)

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const setFilter = () => {
    if (isNullDate(!!startDate, !!endDate)) {
      setFilteredData(null)
    } else {
      setFilteredData(filterByDate(data, startDate, endDate))
    }
  }

  useEffect(() => {
    data && setFilter()
  }, [startDate, endDate])

  return (
    <Container>
      <Team>
        equipo
      </Team>
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
