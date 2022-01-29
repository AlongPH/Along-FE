import React, { useState } from 'react'
import { Container, SignButton } from './style'
import LabelInput from '../LabelInput/LabelInput'

const SignForm = () => {
  const [checkPw, setCheckPw] = useState('')
  const [state, setState] = useState({
    id: '',
    pw: '',
    name: '',
    phone: '',
    email: '',
  })

  const handleChange = (e: any) => {
    console.log(e.target)
    const { value } = e.target
    console.log(name)
    setState({
      ...state,
    })
  }

  // useEffect(() => {
  //   console.log(id, pw, name, phone, email)
  // }, [id, pw, name, phone, email])
  return (
    <Container>
      <LabelInput
        text="아이디"
        value={state.id}
        onChange={(e) => handleChange(e)}
      />
      <LabelInput text="비밀번호" value={state.pw} onChange={handleChange} />
      <LabelInput
        text="비밀번호 확인"
        value={checkPw}
        onChange={(e) => setCheckPw(e.target.value)}
      />
      <LabelInput text="이름" value={state.name} onChange={handleChange} />
      <LabelInput text="연락처" value={state.phone} onChange={handleChange} />
      <LabelInput text="E-mail" value={state.email} onChange={handleChange} />
      <SignButton onClick={() => con}>회원가입</SignButton>
    </Container>
  )
}

export default SignForm
