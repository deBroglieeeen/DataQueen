import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useEffect, FC } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Header: FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect()
    }
  }, [isAuthenticated, loginWithRedirect])

  return (
    <Box display='flex'>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>データセット</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>cre8r.zone</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>SQLクエリ実行</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  )
}

export { Header }
