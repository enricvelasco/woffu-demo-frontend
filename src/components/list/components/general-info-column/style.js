import styled from 'styled-components'
import { fonts } from '../../../../styles/config/fonts'
import { colors } from '../../../../styles/config/colors'

export const InfoCol = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`

export const TextContainer = styled.div`
  margin-left: 10px;
  font-family: ${fonts.primaryFont};
  color: ${colors.darkTextListColor};
`

export const TextName = styled.p`
  font-size: 13px;
`

export const TextJob = styled.p`
  font-size: 12px;
`
