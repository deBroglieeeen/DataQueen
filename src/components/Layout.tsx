import { HStack, Container } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { SIDEBAR_WIDTH } from '../config/css'
type Props = {
  children: ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <HStack backgroundColor='#F8F9FA'>
      <Sidebar />
      {children}
    </HStack>
  )
}

export { Layout }
