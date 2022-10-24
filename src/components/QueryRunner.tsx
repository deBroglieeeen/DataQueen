import { Textarea, Box, Button } from '@chakra-ui/react'
import React from 'react'

const QueryRunner: React.VFC = () => {
  return (
    <>
      <Box marginTop='40px'>
        <Box display='flex'></Box>
        <Textarea width='100vh' minH='316px'></Textarea>
      </Box>
    </>
  )
}

export { QueryRunner }
