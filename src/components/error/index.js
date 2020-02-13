import React from 'react'
import { ErrorContainer, Error } from '@Components/error/style'

const ErrorText = ({ children }) => (
  <ErrorContainer>
    <Error>
      {children}
    </Error>
  </ErrorContainer>
)

export default ErrorText
