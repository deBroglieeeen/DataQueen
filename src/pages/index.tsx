import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { QueryRunner } from '../components/QueryRunner'
import { Header } from '../components/Header'
import { QueryResult } from '../components/QueryResult'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box marginTop='40px'>
          <Header></Header>
          <QueryRunner></QueryRunner>
          <QueryResult></QueryResult>
        </Box>
      </Layout>
    </>
  )
}

export default Home
