import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { QueryRunner } from '../components/QueryRunner'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box marginTop='40px'>
          <Header></Header>
          <QueryRunner></QueryRunner>
        </Box>
      </Layout>
    </>
  )
}

export default Home
