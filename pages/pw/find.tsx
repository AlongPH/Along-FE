import { useState, useCallback, useMemo } from 'react'
import { Container, SignButton } from 'components/SignUp/style'
import LabelInput from 'components/LabelInput/LabelInput'
import axios from 'axios'
import Router from 'next/router'

const FindPassword = () => {
  // input field state
  const [id, setId] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  // Error state
  const [idError, setIdError] = useState<boolean>(false)
  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)

  // Error Message
  const [idMessage, setIdMessage] = useState<string>('')
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
      } else {
        setIdError(false)
      }
    },
    [idError, idMessage]
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
    [nameError, nameMessage]
  )

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

  const handleClickFind = useCallback(async () => {
    if (hasError) {
      alert('양식에 맞게 입력해주세요.')
      return
    }
    const info = {
      userId: id,
      userNm: name,
      email: email,
    }
    await axios
      .post('http://localhost:4000/users', info)
      .then((res) => {
        console.log(res)
        Router.push('/pw/set')
      })
      .catch((error) => {
        console.log(error)
        alert(error.desc)
      })
  }, [id, name, email])

  const hasError = useMemo(() => {
    return idError || nameError || emailError
  }, [idError, nameError, emailError])

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
      <SignButton onClick={handleClickFind}>비밀번호 찾기</SignButton>
    </Container>
  )
}

export default FindPassword
