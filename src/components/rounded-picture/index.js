import React from 'react'
import { Img } from './style'

const RoundedPicture = ({ picture, alt = '' }) => (
  <Img src={picture} alt={alt} />
)

export default RoundedPicture
