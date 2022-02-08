import React, { useCallback, useMemo, useState } from 'react'
import { Container, SignButton } from './style'
import LabelInput from '../LabelInput/LabelInput'
import axios from 'axios'
import Router from 'next/router'

const SignForm = () => {
  // input field state
  const [id, setId] = useState<string>('')
  const [pw, setPw] = useState<string>('')
  const [pwConfirm, setPwConfirm] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  // Error state
  const [idError, setIdError] = useState<boolean>(false)
  const [pwError, setPwError] = useState<boolean>(false)
  const [pwConfirmError, setPwConfirmError] = useState<boolean>(false)
  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)

  const handleChangeId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      const regId = /^[a-z0-9+]*$/
      setId(newValue)
      if (!regId.test(newValue) || newValue.length === 0) {
        setIdError(true)
      } else {
        setIdError(false)
      }
    },
    [idError]
  )

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
      } else {
        setPwConfirmError(false)
      }
    },
    [pwConfirmError, pw]
  )

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setName(newValue)
      if (2 <= newValue.length && newValue.length <= 8) {
        setNameError(false)
      } else {
        setNameError(true)
      }
    },
    [nameError]
  )
  // /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  const handleChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      const regEmail =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

      setEmail(newValue)
      if (regEmail.test(newValue)) {
        setEmailError(false)
      } else setEmailError(true)
    },
    [emailError]
  )

  const handleClickSignUp = async () => {
    if (hasError) {
      alert('회원가입 양식에 맞게 입력해주세요.')
      return
    }
    const info = {
      userId: id,
      userPw: pw,
      userNm: name,
      email: email,
    }
    await axios
      .post('http://192.168.1.4:3000/member', info)
      .then((res) => {
        const { data, status } = res
        alert(data?.success)
        Router.push('/')
      })
      .catch((error) => {
        console.log(error)
        alert(error.desc)
      })
  }

  const hasError = useMemo(() => {
    return idError || pwError || pwConfirmError || nameError || emailError
  }, [idError, pwError, pwConfirmError, nameError, emailError])

  return (
    <Container>
      <LabelInput
        text="아이디"
        value={id}
        placeHolder="영문+숫자 조합으로 2~20자 입력하세요"
        onChange={handleChangeId}
        isError={idError}
      />
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
      <LabelInput
        text="이름"
        value={name}
        placeHolder="8자 이내로 입력하세요"
        onChange={handleChangeName}
        isError={nameError}
      />
      <LabelInput
        text="이메일"
        value={email}
        placeHolder="이메일 형식을 입력해주세요"
        onChange={handleChangeEmail}
        isError={emailError}
      />
      <SignButton onClick={handleClickSignUp}>회원가입</SignButton>
    </Container>
  )
}

export default SignForm
