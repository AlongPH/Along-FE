import React from 'react'
import NavBar from 'components/NavBar/NavBar'

interface AppLayoutProps {
  children?: React.ReactNode
}

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props

  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default AppLayout
