import React from 'react';
import { Input } from '@Components/date-input/style'

const DateInput = ({ onChangeDate, min, max }) => (
  <Input type="date" min={min} max={max} onChange={e => onChangeDate(e.target.value)} />
);

export default DateInput;
