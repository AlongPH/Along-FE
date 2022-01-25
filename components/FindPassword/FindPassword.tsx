import React from 'react'
import { Container, SignButton } from '../SignUp/style'
import LabelInput from '../LabelInput/LabelInput'

const FindPassword = () => {
  return (
    <Container>
      <LabelInput text="아이디" value={''} onChange={() => console.log('s')} />
      <LabelInput
        text="이름"
        value={''}
        onChange={() => console.log('ASDFASDF')}
      />
      <LabelInput
        text="E-mail"
        value={''}
        onChange={() => console.log('ASdf')}
      />
      <SignButton>비밀번호 찾기</SignButton>
    </Container>
  )
}

export default FindPassword
