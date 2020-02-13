import styled from 'styled-components'
import { colors } from '@Styles/config/colors'
import { fonts } from '@Styles/config/fonts'
import { mediaQueries } from '@Styles/config/media-queries'

export const Input = styled.input`
  border: 1px solid ${colors.inputBorderColor};
  background-color: ${colors.backgoundColorLight};
  color: ${colors.inputTextColor};
  border-radius: 5px;
  font-family: ${fonts.primaryFont};
  font-size: 12px;
  padding: 5px;
  width: 120px;
  margin: 3px 5px 0 5px;
  border: 1px solid ${({ error }) => error ? colors.inputErrorBorderColor : colors.inputTextColor};
  ${mediaQueries.desktop} {
    font-size: 14px;
    padding: 8px;
    width: 150px;
    margin: 0 5px;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 0 ${colors.inputFocusedColor};
  }
`
