import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { Main, Container, SearchField, Button } from './style'
import Modal from '../Modal/Modal'
import Login from '../Login/Login'

const NavBar = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const clickLogin = useCallback(() => {
    setVisible(true)
  }, [])

  const closeLogin = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <>
      <Container>
        <Link href={'/'}>
          <Main>Along</Main>
        </Link>
        <SearchField />
        <Button onClick={clickLogin}>로그인</Button>
        <Link href={'signup'}>
          <Button>회원가입</Button>
        </Link>
      </Container>
      <Modal
        visible={visible}
        header="로그인"
        onClose={closeLogin}
        contents={<Login closeModal={closeLogin} />}
      />
    </>
  )
}

export default NavBar
