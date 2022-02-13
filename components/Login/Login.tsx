import React, { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import LabelInput from 'components/LabelInput/LabelInput'
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
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const handleChangeId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setId(value)
    },
    []
  )

  const handleChangePw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setPw(value)
    },
    []
  )
  const handleClickEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleClickLogin()
      }
    },
    []
  )
  const handleClickLogin = useCallback(async () => {
    // axios
    const user = {
      userId: id,
      userPw: pw,
    }
    await axios
      .post('http://192.168.1.4:3000/member/login', user)
      .then((res) => {
        const { data } = res
        alert(data?.success)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      <FormContainer>
        <LabelInput text="아이디" value={id} onChange={handleChangeId} />
        <LabelInput
          text="비밀번호"
          value={pw}
          type="password"
          onChange={handleChangePw}
          onKeyPress={handleClickEnter}
          isError
          errorMessage="test"
          placeHolder="영문+숫자+특수문자를 8~20자 입력하세요"
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
