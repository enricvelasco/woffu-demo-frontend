import styled from 'styled-components'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { fonts } from '@Styles/config/fonts'
import { colors } from '@Styles/config/colors'
import { mediaQueries } from '@Styles/config/media-queries'

export const HeaderItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-family: ${fonts.primaryFont};
  color: ${colors.listHeaderTextColor};
  font-size: 13px;
  ${mediaQueries.desktop} {
    font-size: 14px;
  }
`

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ArrowUp = styled(MdArrowDropUp)`
  &:hover{
    cursor: pointer;
    color: ${colors.arrowHoverColor};
  }
`
export const ArrowDown = styled(MdArrowDropDown)`
  &:hover{
    cursor: pointer;
    color: ${colors.arrowHoverColor};
  }
`
