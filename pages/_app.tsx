// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import React from 'react'
import type { AppProps } from 'next/app'
import AppLayout from '../components/AppLayout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <Component />
    </AppLayout>
  )
}

export default App
