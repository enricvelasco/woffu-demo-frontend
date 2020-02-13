import React from 'react'
import { HeaderItemStyled, ArrowContainer, ArrowDown, ArrowUp } from './style'

const HeaderItem = ({ itemKey, children, onOrder }) => (
  <HeaderItemStyled>
    {children}
    <ArrowContainer>
      <ArrowUp onClick={() => onOrder('up', itemKey)} />
      <ArrowDown onClick={() => onOrder('down', itemKey)} />
    </ArrowContainer>
  </HeaderItemStyled>
)

export default HeaderItem
