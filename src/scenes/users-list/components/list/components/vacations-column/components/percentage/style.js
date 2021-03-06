import styled from 'styled-components'
import { colors } from '@Styles/config/colors'
import { mediaQueries } from '@Styles/config/media-queries'

export const FullBar = styled.div`
  width: 80px;
  height: 15px;
  border-radius: 5px;
  background-color: ${colors.percentageBarColorBackground};
  margin: 0 auto;
  overflow: hidden;
  ${mediaQueries.tablet}{
    width: 125px;
  }
  ${mediaQueries.desktop} {
    width: 150px;
  }
`

export const Used = styled.div`
  width: ${({ percent }) => percent || 0}%;
  height: 100%;
  background-color: ${colors.percentageBarUsedColor};
`
