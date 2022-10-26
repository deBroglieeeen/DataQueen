import { Textarea, Box, Button } from '@chakra-ui/react'
import { VscRunAll } from 'react-icons/vsc'
import React from 'react'

const QueryRunner: React.VFC = () => {
  return (
    <>
      <Box marginTop='40px'>
        <Box display='flex' marginBottom='40px'>
          <Button colorScheme='teal' rightIcon={<VscRunAll />}>
            実行
          </Button>
        </Box>
        <Textarea width='100vh' minH='316px'></Textarea>
      </Box>
    </>
  )
}

export { QueryRunner }
