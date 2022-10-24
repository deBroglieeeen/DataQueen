import { HStack, Box, Flex, Container } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { SIDEBAR_WIDTH } from '../config/css'
type Props = {
  children: ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <Box display='flex' backgroundColor='#F8F9FA'>
      <Sidebar />
      <Container
        minHeight='container.xl'
        maxW='calc(100% - 275px)'
        w={{
          base: '100%',
          xl: 'calc(100% - 275px)',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export { Layout }
