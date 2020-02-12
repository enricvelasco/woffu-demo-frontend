import React from 'react';
import { PictureContainer, Img } from './style'

const RoundedPicture = ({ picture, alt='' }) => (
  <Img src={picture} alt={alt} />
);

export default RoundedPicture;
