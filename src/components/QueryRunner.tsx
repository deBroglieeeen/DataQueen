import { Textarea, Box } from '@chakra-ui/react'
import React from 'react'

const QueryRunner: React.VFC = () => {
  return (
    <>
      <Box display='flex' marginTop='40px'>
        <Textarea width='1600px' minH='316px'></Textarea>
      </Box>
    </>
  )
}

export { QueryRunner }
