import styled from 'styled-components'
import { mediaQueries } from '@Styles/config/media-queries'

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const ColumnStyled = styled.div`
  display: flex;
  width: calc(100% / ${({ small }) => small});
  ${mediaQueries.tablet}{
    width: calc(100% / ${({ medium }) => medium});
  }
  ${mediaQueries.desktop}{
    width: calc(100% / ${({ large }) => large});
  }
`
