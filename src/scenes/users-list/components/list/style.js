import styled from 'styled-components'
import { colors } from '@Styles/config/colors'
import { fonts } from '@Styles/config/fonts'
import { RowStyled } from '@Components/grid-layout/style'

export const Row = styled(RowStyled)`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.backgroundColor};
`

export const UserKeyColumn = styled.div`
  margin: 0 auto;
  font-family: ${fonts.primaryFont};
  color: ${colors.darkTextListColor};
  font-size: 15px;
`

export const DateColumn = styled.div`
  margin: 0 auto;
  font-family: ${fonts.primaryFont};
  color: ${colors.darkTextListColor};
  font-size: 15px;
`
