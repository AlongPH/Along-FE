import React, { useState, useCallback } from 'react'
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
  const [id, setId] = useState<string>('')
  const [pw, setPw] = useState<string>('')

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(() => e.target.value)
  }, [])
  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(() => e.target.value)
  }, [])

  const handleClickLogin = useCallback(
    async (e: React.MouseEventHandler<HTMLButtonElement>) => {
      console.log('id', id, 'pw', pw)
      // axios
      const data = await axios.get('http://localhost:4000/users')
      console.log('data', data)
    },
    [id, pw]
  )

  return (
    <>
      {/* LabelContainer나 LabelInput등의 공통컴포넌트로 변경 */}

      <FormContainer>
        <LabelInput
          text="아이디"
          value={id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeId(e)}
        />
        <LabelInput
          text="비밀번호"
          value={pw}
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangePw(e)}
        />
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
