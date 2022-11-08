import { Textarea, Box, Button, FormControl } from '@chakra-ui/react'
import { VscRunAll } from 'react-icons/vsc'
import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'

type Form = {
  query: string
}

const QueryRunner: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ mode: 'onBlur', reValidateMode: 'onChange' })

  const onSubmit: SubmitHandler<Form> = async (data) => {
    console.log('hi')
    const executeQuery = JSON.stringify({
      query: data.query,
      date: '20220101',
    })
    const config = {
      method: 'post',
      url: 'http://127.0.0.1:3000/query',
      headers: {
        'Content-Type': 'application/json',
      },
      data: executeQuery,
    }

    try {
      const response = await axios(config)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Box marginTop='40px'>
        <Box display='flex' marginBottom='40px'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button colorScheme='teal' rightIcon={<VscRunAll />} type='submit'>
              実行
            </Button>
            <FormControl marginTop='40px'>
              <Textarea
                width='77vw'
                minH='316px'
                id='query'
                placeholder='SELECT * FROM User'
                {...register('query', { required: '入力してください' })}
              ></Textarea>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  )
}

export { QueryRunner }
