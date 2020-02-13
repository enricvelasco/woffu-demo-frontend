import styled from 'styled-components'
import { colors } from '@Styles/config/colors'
import { fonts } from '@Styles/config/fonts'
import { mediaQueries } from '@Styles/config/media-queries'
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
  font-size: 13px;
  ${mediaQueries.desktop} {
    font-size: 15px;
  }
`

export const DateColumn = styled.div`
  margin: 0 auto;
  font-family: ${fonts.primaryFont};
  color: ${colors.darkTextListColor};
  font-size: 13px;
  ${mediaQueries.desktop} {
    font-size: 15px;
  }
`

export const HeaderItem = styled.div`
  width: 100%;
  text-align: center;
  font-family: ${fonts.primaryFont};
  color: ${colors.listHeaderTextColor};
  font-size: 13px;
  ${mediaQueries.desktop} {
    font-size: 14px;
  }
`

export const RowHeader = styled(RowStyled)`
  background-color: ${colors.listeHeaderColor};
  padding: 10px 5px;
  border-top: 1px solid ${colors.headerListBorderColor};
  border-bottom: 1px solid ${colors.headerListBorderColor};
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
