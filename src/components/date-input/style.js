import styled from 'styled-components'
import { colors } from '@Styles/config/colors'
import { fonts } from '@Styles/config/fonts'

export const Input = styled.input`
  border: 1px solid ${colors.inputBorderColor};
  color: ${colors.inputTextColor};
  border-radius: 5px;
  font-family: ${fonts.primaryFont};
  font-size: 14px;
  padding: 8px;
  width: 140px;
  margin: 0 5px;
  border: 1px solid ${({ error }) => error ? colors.inputErrorBorderColor : colors.inputTextColor};
  
`
