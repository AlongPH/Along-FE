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

  // Error Message
  const [idMessage, setIdMessage] = useState<string>('')
  const [pwMessage, setPwMessage] = useState<string>('')
  const [pwConfirmMessage, setPwConfirmMessage] = useState<string>('')
  const [nameMessage, setNameMessage] = useState<string>('')
  const [emailMessage, setEmailMessage] = useState<string>('')

  const handleChangeId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setId(value)
    },
    []
  )

  const handleBlurId = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      const regId = /^[a-z0-9+]*$/

      if (!regId.test(value) || value.length === 0) {
        setIdError(true)
        setIdMessage('2~20자의 영문 소문자와 숫자의 조합으로 입력해주세요.')
        return
      }
      await axios
        .get('http://192.168.1.4:3000/member', {
          params: { userId: value },
        })
        .then(
          (res) => console.log(res)
          // 여기서 message처리 및 error state 설정
        )
    },
    [idError, idMessage]
  )

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

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setName(value)
    },
    []
  )

  const handleBlurName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if (value.length <= 8) {
        setNameError(false)
      } else {
        setNameError(true)
        setNameMessage('8자 이내로 입력하세요.')
      }
    },
    []
  )

  // /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  const handleChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setEmail(value)
    },
    []
  )

  const handleBlurEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      const regEmail =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      if (regEmail.test(value)) {
        setEmailError(false)
      } else {
        setEmailError(true)
        setEmailMessage('이메일 형식을 입력해주세요.')
      }
    },
    [emailError, emailMessage]
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
        onChange={handleChangeId}
        isError={idError}
        onBlur={handleBlurId}
        errorMessage={idMessage}
      />
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
      <LabelInput
        text="이름"
        value={name}
        onChange={handleChangeName}
        isError={nameError}
        onBlur={handleBlurName}
        errorMessage={nameMessage}
      />
      <LabelInput
        text="이메일"
        value={email}
        onChange={handleChangeEmail}
        isError={emailError}
        onBlur={handleBlurEmail}
        errorMessage={emailMessage}
      />
      <SignButton onClick={handleClickSignUp}>회원가입</SignButton>
    </Container>
  )
}

export default SignForm
