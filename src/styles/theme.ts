import { extendTheme } from '@chakra-ui/react'
import { buttonStyles } from './button'
import { Noto_Sans_JP } from '@next/font/google'

const notosansJP = Noto_Sans_JP({
  weight: '400',
})

const theme = extendTheme({
  fonts: {
    heading: notosansJP,
    body: notosansJP,
  },
  colors: {
    Primary: `#38B2AC`,
    Secondary: `#3182CE`,
    HeaderBlack: `#454751`,
    BodyBlack: `#666A71`,
    Background: `#EDF2F7`,
    White: `#FFFFFF`,
    Red: `#F56565`,
    Gray: `#F1F1F1`,
    LogoGradation: `linear-gradient(0deg, #68D391 0%, #4a96de 60%, #7b61ff 100%)`,
    Green: `#68D391`,
    Purple: `#7B61FF`,
  },
  buttonStyles,
})

export { theme }
