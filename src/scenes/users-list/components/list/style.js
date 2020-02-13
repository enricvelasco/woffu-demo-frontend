import styled from 'styled-components'
import { colors } from '@Styles/config/colors'
import { fonts } from '@Styles/config/fonts'
import { RowStyled } from '@Components/grid-layout/style'

export const RowContent = styled(RowStyled)`
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

export const HeaderItem = styled.div`
  width: 100%;
  text-align: center;
  font-family: ${fonts.primaryFont};
  font-size: 14px;
  color: ${colors.listHeaderTextColor};
`

export const RowHeader = styled(RowStyled)`
  background-color: ${colors.listeHeaderColor};
  padding: 10px 5px;
  border-top: 1px solid rgba(172, 185, 199, 0.3);
  border-bottom: 1px solid rgba(172, 185, 199, 0.3);
`

export const ListContainer = styled.div`
  max-height: 700px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  -ms-overflow-style: none; /*Edge*/
`
