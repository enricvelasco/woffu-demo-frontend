import React from 'react'
import { RoundedContainer, Text } from './style'
import { getRandomColor } from './colors'

const RoundedText = ({ text }) => {
  return (
    <RoundedContainer backgroundColor={getRandomColor()}>
      <Text>{text}</Text>
    </RoundedContainer>
  )
}

export default RoundedText
