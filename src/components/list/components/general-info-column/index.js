import React from 'react';
import { InfoCol } from './style'
import RoundedPicture from '../../../rounded-picture'

const demo = 'https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349'

const GeneralInfoColumn = ({
  imageUrl,
  acronym,
  firstName,
  lastName,
  jobTitleId,
  departmentId,
}) => {
  console.log('IMAGE:', imageUrl)
  return (
    <InfoCol>
      {
        imageUrl ?
          <RoundedPicture picture={imageUrl} alt={firstName}/>
          :

      }
    </InfoCol>
  );
}

export default GeneralInfoColumn;
