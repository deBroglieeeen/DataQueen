import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { GetUserByIdQuery, GetUserByIdQueryVariables } from '../generated/graphql'
import { getUserByIdQuery } from '../graphql/user'
import { useQuery } from 'urql'

const Header: React.VFC = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()

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
      {/* <Box>{user ? `(ユーザー:${user?.name}${user.sub})` : null}</Box> */}
    </Box>
  )
}

export { Header }
