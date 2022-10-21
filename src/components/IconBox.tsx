import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
type Props = {
  children: ReactNode
  bg: any
  color: any
  h: any
  w: any
  me: any
}

const IconBox: React.VFC<Props> = (Props) => {
  const { children, ...rest } = Props

  return (
    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'12px'} {...rest}>
      {children}
    </Flex>
  )
}

export { IconBox }
