import styled from 'styled-components'
import { fonts } from '@Styles/config/fonts'
import { colors } from '@Styles/config/colors'

export const RoundedContainer = styled.div`
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  font-family: ${fonts.primaryFont};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.whiteTextColor};
`
