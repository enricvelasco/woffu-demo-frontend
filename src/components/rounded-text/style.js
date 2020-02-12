import styled from 'styled-components'
import { fonts } from '../../styles/config/fonts'
import { colors } from '../../styles/config/colors'

export const RoundedContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};;
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
