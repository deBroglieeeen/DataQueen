import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { GetUserByIdQuery, GetUserByIdQueryVariables } from '../generated/graphql'
import { getUserByIdQuery } from '../graphql/user'
import { useQuery } from 'urql'

const Header: React.VFC = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()
  const [{ data: userResponse }] = useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>({
    query: getUserByIdQuery,
    variables: {
      id: user?.sub ?? '',
    },
    pause: user?.sub === undefined,
  })
  useEffect(() => {
    if (!isAuthenticated) {
      // loginWithRedirect()
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
      <Box>{userResponse ? `(ユーザー:${userResponse?.users_by_pk?.name})` : null}</Box>
      <Button onClick={() => loginWithRedirect()}>ログイン</Button>
    </Box>
  )
}

export { Header }
