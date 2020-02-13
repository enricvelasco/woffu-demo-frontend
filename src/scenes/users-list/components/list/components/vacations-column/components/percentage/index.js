import React from 'react'
import { FullBar, Used } from './style'

const Percentage = ({ used, avaliable }) => {
  const obtained = used
  const total = used + avaliable
  const percent = obtained * 100 / total

  return (
    <FullBar>
      <Used percent={percent} />
    </FullBar>
  )
}

export default Percentage
