import React, { useCallback, useMemo, useState } from 'react'
import { Container, SignButton } from './style'
import LabelInput from '../LabelInput/LabelInput'
import axios from 'axios'
import Router from 'next/router'

const SignForm = () => {
  const [info, setInfo] = useState({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    phone: '',
    email: '',
  })

  const handleChange = useCallback(
    (e: any) => {
      const { value, name } = e.target
      setInfo({
        ...info,
        [name]: value,
      })
    },
    [info]
  )

  const handleClickSignUp = async () => {
    await axios.post('http://localhost:4000/users', info).then(() => {
      alert('회원가입 성공')
      Router.push('/')
    })
  }

  const LabelInfo = useMemo(() => {
    return [
      { name: 'id', text: '아이디' },
      { name: 'pw', text: '비밀번호', type: 'password' },
      { name: 'pwCheck', text: '비밀번호 확인', type: 'password' },
      { name: 'phone', text: '연락처' },
      { name: 'email', text: '이메일' },
    ]
  }, [info])

  // useEffect(() => {
  //   console.log(id, pw, name, phone, email)
  // }, [id, pw, name, phone, email])
  return (
    <Container>
      {LabelInfo.map((v) => {
        return (
          <LabelInput
            key={v.name}
            name={v.name}
            text={v.text}
            type={v?.type}
            value={info[v.name]}
            onChange={handleChange}
          />
        )
      })}
      <SignButton onClick={handleClickSignUp}>회원가입</SignButton>
    </Container>
  )
}

export default SignForm
