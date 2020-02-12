import styled from 'styled-components'
import { colors } from '@Styles/config/colors'

export const FullBar = styled.div`
  width: 150px;
  height: 15px;
  border-radius: 5px;
  background-color: ${colors.percentageBarColorBackground};
  margin: 0 auto;
  overflow: hidden;
`

export const Used = styled.div`
  width: ${({ percent }) => percent || 0}%;
  height: 100%;
  background-color: ${colors.percentageBarUsedColor};
`
