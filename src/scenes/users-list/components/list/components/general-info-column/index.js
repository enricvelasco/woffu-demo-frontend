import React from 'react'
import { InfoCol, TextContainer, TextName, TextJob } from './style'
import RoundedPicture from '@Components/rounded-picture'
import RoundedText from '@Components/rounded-text'

const GeneralInfoColumn = ({
  imageUrl,
  acronym,
  firstName,
  lastName,
  jobTitleId,
  departmentId
}) => {
  console.log('IMAGE:', jobTitleId)
  return (
    <InfoCol>
      {
        imageUrl
          ? <RoundedPicture picture={imageUrl} alt={firstName} />
          : <RoundedText text={acronym} />
      }
      <TextContainer>
        <TextName>{firstName} {lastName}</TextName>
        <TextJob>{jobTitleId} | {departmentId}</TextJob>
      </TextContainer>
    </InfoCol>
  )
}

export default GeneralInfoColumn
