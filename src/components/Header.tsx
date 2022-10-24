import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const Header: React.VFC = () => {
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
