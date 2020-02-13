import React from 'react'
import { Input } from '@Components/date-input/style'

const DateInput = ({ onChangeDate, min, max, error }) => (
  <Input type='date' min={min} max={max} onChange={e => onChangeDate(e.target.value)} error={error} />
)

export default DateInput
