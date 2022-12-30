import { Box, Container } from '@chakra-ui/react'
import { ReactNode, FC } from 'react'
import { Sidebar } from '@/components/Sidebar/Sidebar'
type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box display='flex' backgroundColor='#F8F9FA'>
      <Sidebar />
      <Container minHeight='container.xl'>{children}</Container>
    </Box>
  )
}

export { Layout }
