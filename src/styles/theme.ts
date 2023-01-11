import { extendTheme } from '@chakra-ui/react'
import { colorPalettes } from './colors'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: '#FAF8FD',
      },
    },
  },
  fonts: {
    heading: `'Noto Sans JP', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
  },
  colorPalettes,
})

export { theme }
