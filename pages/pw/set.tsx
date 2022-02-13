import React, { useState, useCallback, useMemo } from 'react'
import { Container, SignButton } from 'components/SignUp/style'
import LabelInput from 'components/LabelInput/LabelInput'
import axios from 'axios'
import Router from 'next/router'

const SetPassword = () => {
  // input field state
  const [pw, setPw] = useState<string>('')
  const [pwConfirm, setPwConfirm] = useState<string>('')

  // Error state
  const [pwError, setPwError] = useState<boolean>(false)
  const [pwConfirmError, setPwConfirmError] = useState<boolean>(false)

  // Error Message
  const [pwMessage, setPwMessage] = useState<string>('')
  const [pwConfirmMessage, setPwConfirmMessage] = useState<string>('')

  const handleChangePw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setPw(value)
    },
    []
  )

  const handleBlurPw = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/
      if (!regPw.test(value) || value.length === 0) {
        setPwError(true)
        setPwMessage('8~20자 영문 대 소문자, 숫자, 특수문자를 입력하세요.')
      } else {
        setPwError(false)
      }
    },
    [pwError, pwMessage]
  )

  const handleChangePwConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setPwConfirm(value)
    },
    []
  )

  const handleBlurPwConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if (pw !== value) {
        setPwError(true)
        setPwConfirmMessage('비밀번호가 일치하지 않습니다.')
      } else {
        setPwConfirmError(false)
      }
    },
    [pw, pwConfirmError, pwConfirmMessage]
  )

  const handleClickSet = useCallback(async () => {
    if (hasError) {
      alert('양식에 맞게 입력해주세요.')
      return
    }
    const info = {
      userPw: pw,
    }
    await axios
      .post('http://localhost:4000/users', info)
      .then((res) => {
        console.log(res)
        Router.push('/')
      })
      .catch((error) => {
        console.log(error)
        alert(error.desc)
      })
  }, [pw])

  const hasError = useMemo(() => {
    return pwError || pwConfirmError
  }, [pwError, pwConfirmError])

  return (
    <Container>
      <LabelInput
        text="비밀번호"
        value={pw}
        type="password"
        onChange={handleChangePw}
        isError={pwError}
        onBlur={handleBlurPw}
        errorMessage={pwMessage}
      />
      <LabelInput
        text="비밀번호 확인"
        value={pwConfirm}
        type="password"
        onChange={handleChangePwConfirm}
        isError={pwConfirmError}
        onBlur={handleBlurPwConfirm}
        errorMessage={pwConfirmMessage}
      />
      <SignButton onClick={handleClickSet}>비밀번호 설정</SignButton>
    </Container>
  )
}

export default SetPassword
