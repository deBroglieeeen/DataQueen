// import { Noto_Sans_JP } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
import { theme } from '../styles/theme'

// const notosansJP = Noto_Sans_JP({
//   weight: '400',
// })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
