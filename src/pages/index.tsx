import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '@/components/Layout/Layout'
import { QueryRunner } from '@/components/QueryRunner/QueryRunner'
import { Header } from '@/components/Header/Header'
import { QueryResult } from '@/components/QueryResult/QueryResult'
import { useState } from 'react'

const Home: NextPage = () => {
  const [responseData, setResponseData] = useState<Map<String, any>[]>([])
  const [isLoaded, setIsLoaded] = useState(true)
  const [runtime, setRuntime] = useState(0)

  return (
    <>
      <Layout>
        <Box marginTop='40px'>
          <Header />
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
