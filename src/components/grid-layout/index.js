import React from 'react'
import { RowStyled, ColumnStyled } from './style'

export const Column = ({ children, small, large, medium }) => (
  <ColumnStyled large={large} medium={medium} small={small}>
    {children}
  </ColumnStyled>
)

export const Row = ({ children }) => (
  <RowStyled>
    {children}
  </RowStyled>
)
