import React, { useState } from 'react'
import { Container, SignButton } from './style'
import LabelInput from '../LabelInput/LabelInput'

const SignForm = () => {
  return (
    <Container>
      <LabelInput
        text="아이디"
        value=""
        onChange={() => console.log('ASDFASdf')}
      />
      <LabelInput
        text="비밀번호"
        value=""
        onChange={() => console.log('sdf')}
      />
      <LabelInput
        text="비밀번호 확인"
        value=""
        onChange={() => console.log('sdf')}
      />
      <LabelInput text="이름" value="" onChange={() => console.log('sdf')} />
      <LabelInput text="연락처" value="" onChange={() => console.log('sdf')} />
      <LabelInput
        text="E-mail"
        value=""
        onChange={() => console.log('asdfasdf')}
      />
      <SignButton>회원가입</SignButton>
    </Container>
  )
}

export default SignForm
