import styled from 'styled-components'
import { colors } from '../../styles/config/colors'
import { fonts } from '../../styles/config/fonts'
import { ColumnStyled, RowStyled } from '../grid-layout/style'

export const Row = styled(RowStyled)`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.backgroundColor};
`

export const UserKeyColumn = styled(ColumnStyled)`
  justify-content: center;
  font-family: ${fonts.primaryFont};
  color: ${colors.darkTextListColor};
  font-size: 15px;
`

export const DateColumn = styled(ColumnStyled)`
  justify-content: center;
  font-family: ${fonts.primaryFont};
  color: ${colors.darkTextListColor};
  font-size: 15px;
`
