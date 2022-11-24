import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { QueryRunner } from '../components/QueryRunner'
import { Header } from '../components/Header'
import { QueryResult } from '../components/QueryResult'
import { useState } from 'react'

const Home: NextPage = () => {
  const [responseData, setResponseData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(true)
  const [runtime, setRuntime] = useState(null)
  return (
    <>
      <Layout>
        <Box marginTop='40px'>
          <Header></Header>
          <QueryRunner
            setRuntime={setRuntime}
            setIsLoaded={setIsLoaded}
            setResponseData={setResponseData}
          ></QueryRunner>
          <QueryResult
            runtime={runtime}
            isLoaded={isLoaded}
            responseData={responseData}
          ></QueryResult>
        </Box>
      </Layout>
    </>
  )
}

export default Home
