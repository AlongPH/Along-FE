import { useState, useCallback, useMemo } from 'react'
import { Container, SignButton } from '../../components/SignUp/style'
import LabelInput from '../../components/LabelInput/LabelInput'
import axios from 'axios'
import Router from 'next/router'

const FindPassword = () => {
  const [info, setInfo] = useState<{ id: string; name: string; email: string }>(
    {
      id: '',
      name: '',
      email: '',
    }
  )
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

  const handleClickFind = useCallback(async () => {
    await axios.post('http://localhost:4000/users', info).then((res) => {
      console.log(res)
      Router.push('/pw/set')
    })
  }, [])

  const LabelInfo = useMemo(() => {
    return [
      { name: 'id', text: '아이디' },
      { name: 'name', text: '이름' },
      { name: 'email', text: '이메일' },
    ]
  }, [])

  return (
    <Container>
      {LabelInfo.map((v) => {
        return (
          <LabelInput
            key={v.name}
            name={v.name}
            text={v.text}
            value={info[v.name]}
            onChange={handleChange}
          />
        )
      })}
      <SignButton onClick={handleClickFind}>비밀번호 찾기</SignButton>
    </Container>
  )
}

export default FindPassword
