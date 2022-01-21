import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar/NavBar'

interface AppLayoutProps {
  children?: React.ReactNode
}

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props

  return (
    <>
      <Head>
        <title>Along</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Along-techBlog" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <NavBar />
      {children}
    </>
  )
}

export default AppLayout
