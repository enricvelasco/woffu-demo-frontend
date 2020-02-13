import React, { useState, useEffect, useContext } from 'react'
import DateInput from '@Components/date-input'
import { Container, FilterContainer, FilterContainerText, InputContainer, Team } from './style'
import { Context } from '../../../../Context'
import { filterByDate, stingToDate } from '@Services/date'

const isNullDate = (start, end) => !start && !end
const isErrorDate = (start, end) => stingToDate(end) < stingToDate(start)

const FilterHeader = () => {
  const { data, setFilteredData } = useContext(Context)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [inputError, setInputError] = useState(false)

  const setFilter = () => {
    isNullDate(!!startDate, !!endDate) ? setFilteredData(null) : setFilteredData(filterByDate(data, startDate, endDate))
  }

  useEffect(() => {
    !!startDate && !!endDate && isErrorDate(startDate, endDate) ? setInputError(true) : setInputError(false)
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
          <DateInput max={endDate} placeholder='Fecha Inicial' error={inputError} onChangeDate={date => setStartDate(date)} />
          <DateInput min={startDate} placeholder='Fecha Final' error={inputError} onChangeDate={date => setEndDate(date)} />
        </InputContainer>
      </FilterContainer>
    </Container>
  )
}

export default FilterHeader
