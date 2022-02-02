import React, { useState, useCallback, useMemo } from 'react'
import { Container, SignButton } from '../../components/SignUp/style'
import LabelInput from '../../components/LabelInput/LabelInput'

const SetPassword = () => {
  const [info, setInfo] = useState<{ pw: string; pwCheck: string }>({
    pw: '',
    pwCheck: '',
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setInfo({
        ...info,
        [name]: value,
      })
    },
    [info]
  )
  const LabelInfo = useMemo(() => {
    return [
      { name: 'id', text: '아이디' },
      { name: 'pw', text: '비밀번호', type: 'password' },
    ]
  }, [])

  return (
    <Container>
      {LabelInfo.map((v) => (
        <LabelInput
          key={v.name}
          name={v.name}
          text={v.text}
          type={v?.type}
          value={info[v.name]}
          onChange={handleChange}
        />
      ))}
      <SignButton>비밀번호 설정</SignButton>
    </Container>
  )
}

export default SetPassword
