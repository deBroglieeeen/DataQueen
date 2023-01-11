import { Box, Container } from '@chakra-ui/react'
import { ReactNode, FC } from 'react'
import { Sidebar } from '@/components/Sidebar/Sidebar'
type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box display='flex'>
      <Sidebar />
      <Box width={`full`} paddingLeft={`24px`} paddingRight={`40px`}>
        {children}
      </Box>
    </Box>
  )
}

export { Layout }
