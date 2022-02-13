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

  const handleChangePw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/
      setPw(newValue)
      if (!regPw.test(newValue) || newValue.length === 0) {
        setPwError(true)
      } else setPwError(false)
    },
    [pwError]
  )

  const handleChangePwConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setPwConfirm(newValue)
      if (pw !== newValue) {
        setPwConfirmError(true)
      } else setPwConfirmError(false)
    },
    [pw, pwConfirmError]
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
        placeHolder="영문+숫자+특수문자를 8~20자 입력하세요"
        onChange={handleChangePw}
        isError={pwError}
      />
      <LabelInput
        text="비밀번호 확인"
        value={pwConfirm}
        type="password"
        onChange={handleChangePwConfirm}
        placeHolder="비밀번호와 동일하게 입력하세요"
        isError={pwConfirmError}
      />
      <SignButton onClick={handleClickSet}>비밀번호 설정</SignButton>
    </Container>
  )
}

export default SetPassword
