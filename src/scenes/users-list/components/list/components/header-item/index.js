import React from 'react'
import { HeaderItemStyled, ArrowContainer, ArrowDown, ArrowUp } from './style'

const HeaderItem = ({ itemKey, children, onSort }) => (
  <HeaderItemStyled>
    {children}
    <ArrowContainer>
      <ArrowUp onClick={() => onSort('up', itemKey)} />
      <ArrowDown onClick={() => onSort('down', itemKey)} />
    </ArrowContainer>
  </HeaderItemStyled>
)

export default HeaderItem
