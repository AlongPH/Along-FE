import React from 'react'
import { Container, SignButton } from '../SignUp/style'
import LabelInput from '../LabelInput/LabelInput'

const SetPassword = () => {
  return (
    <Container>
      <LabelInput
        text="비밀번호"
        value={''}
        onChange={() => console.log('d')}
      />
      <LabelInput
        text="비밀번호 확인"
        value={''}
        onChange={() => console.log('ds')}
      />
      <SignButton>비밀번호 설정</SignButton>
    </Container>
  )
}

export default SetPassword
