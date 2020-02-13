import styled from 'styled-components'
import { fonts } from '@Styles/config/fonts'
import { colors } from '@Styles/config/colors'
import { mediaQueries } from '@Styles/config/media-queries'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-bottom: 10px;
`

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  ${mediaQueries.desktop} {
    flex-direction: row;
  }
`

export const Team = styled.p`
  font-family: ${fonts.primaryFont};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  color: ${colors.listHeaderTextColor};
`

export const FilterContainerText = styled.p`
  font-family: ${fonts.primaryFont};
  font-size: 13px;
  color: ${colors.listHeaderTextColor};
  ${mediaQueries.desktop} {
    font-size: 15px;
  }
`

export const InputContainer = styled.form`
  margin: 0 5px;
  display: flex;
  flex-direction: row;
`
