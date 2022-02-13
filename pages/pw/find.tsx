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
    },
    []
  )

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setName(newValue)
      if (2 <= newValue.length && newValue.length <= 8) {
        setNameError(false)
      } else setNameError(true)
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
        placeHolder="영문+숫자 조합으로 2~20자 입력하세요"
        onChange={handleChangeId}
        isError={idError}
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
      <SignButton onClick={handleClickFind}>비밀번호 찾기</SignButton>
    </Container>
  )
}

export default FindPassword
