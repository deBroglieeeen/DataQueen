import { Textarea, Box, Button, FormControl } from '@chakra-ui/react'
import { VscRunAll } from 'react-icons/vsc'
import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'

type Form = {
  query: string
  date: '20221106'
}

const QueryRunner: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ mode: 'onBlur', reValidateMode: 'onChange' })
  return (
    <>
      <Box marginTop='40px'>
        <Box display='flex' marginBottom='40px'>
          <Button colorScheme='teal' rightIcon={<VscRunAll />}>
            実行
          </Button>
        </Box>
        <Textarea width='77vw' minH='316px'></Textarea>
      </Box>
    </>
  )
}

export { QueryRunner }
