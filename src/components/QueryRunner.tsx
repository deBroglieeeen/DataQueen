import { Box, Button, FormControl } from '@chakra-ui/react'
import { VscRunAll } from 'react-icons/vsc'
import { SubmitHandler, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import axios from 'axios'
import Editor, { useMonaco } from '@monaco-editor/react'

type Form = {
  query: string
}

type Props = {
  setResponseData: any
  setIsLoaded: any
  setRuntime: any
}

const QueryRunner: React.VFC<Props> = ({ setResponseData, setIsLoaded, setRuntime }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ mode: 'onBlur', reValidateMode: 'onChange' })

  const onSubmit: SubmitHandler<Form> = async (data) => {
    console.log('hi')
    const executeQuery = JSON.stringify({
      query: editorValue,
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
      const startTime = performance.now()
      setIsLoaded(false)
      const response = await axios(config)
      console.log(response)
      setResponseData(response.data.data)
      console.log(response.data.data[0])
      setIsLoaded(true)
      const endTime = performance.now()
      const run = endTime - startTime
      setRuntime(run.toFixed(1))
      console.log(run)
    } catch (error) {
      console.error(error)
      setIsLoaded(true)
    }
  }

  const monaco = useMonaco()
  const [editorValue, setEditorValue] = useState('SELECT * FROM User')
  function handleEditorChange(value: any, event: any) {
    console.log('here is the current model value:', value)
    setEditorValue(value)
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
              <Editor
                height='316px'
                width='77vw'
                defaultLanguage='sql'
                defaultValue='SELECT * FROM User'
                onChange={handleEditorChange}
              />
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  )
}

export { QueryRunner }
