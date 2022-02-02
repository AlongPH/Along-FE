import React, { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import LabelInput from '../LabelInput/LabelInput'
import {
  FormContainer,
  ButtonContainer,
  LoginButton,
  LabelContents,
} from './style'
import LoginProps from './interface'
import axios from 'axios'

const Login = ({ closeModal }: LoginProps) => {
  const [user, setUser] = useState<{ id: string; pw: string }>({
    id: '',
    pw: '',
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setUser({
        ...user,
        [name]: value,
      })
    },
    [user]
  )

  const handleClickLogin = useCallback(async () => {
    // axios
    const data = await axios.get('http://localhost:4000/users')
    console.log('data', data)
  }, [])

  const LabelInfo = useMemo(() => {
    return [
      { name: 'id', text: '아이디' },
      { name: 'pw', text: '비밀번호', type: 'password' },
    ]
  }, [])

  return (
    <>
      <FormContainer>
        {LabelInfo.map((v) => (
          <LabelInput
            key={v.name}
            name={v.name}
            text={v.text}
            type={v?.type}
            value={user[v.name]}
            onChange={handleChange}
          />
        ))}
      </FormContainer>
      <ButtonContainer>
        <LoginButton onClick={handleClickLogin}>로그인</LoginButton>
        {/* <LabelContents>
          아직 회원이 아니신가요?
          <ClickLabel onClick={closeModal}>
            <Link href={'/signup'}> 회원가입</Link>
          </ClickLabel>
        </LabelContents> */}
        <LabelContents>
          비밀번호를 잊으셨나요?
          <div onClick={closeModal}>
            <Link href={'/pw/find'}>비밀번호 찾기</Link>
          </div>
        </LabelContents>
      </ButtonContainer>
    </>
  )
}

export default Login
