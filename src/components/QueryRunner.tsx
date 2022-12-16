import { Box, Button, FormControl, useToast } from '@chakra-ui/react'
import { VscRunAll } from 'react-icons/vsc'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState, FC, Dispatch, SetStateAction } from 'react'
import axios from 'axios'
import Editor, { useMonaco } from '@monaco-editor/react'
import { useMutation } from 'urql'
import { AddQueryMutation, AddQueryMutationVariables } from '../generated/graphql'
import { addQueryMutation } from '../graphql/query'
import { useAuth0 } from '@auth0/auth0-react'

type Form = {
  query: string
}

type Props = {
  setResponseData: Dispatch<SetStateAction<Map<String, any>[]>>
  setIsLoaded: Dispatch<SetStateAction<boolean>>
  setRuntime: Dispatch<SetStateAction<number>>
}

const QueryRunner: FC<Props> = ({ setResponseData, setIsLoaded, setRuntime }) => {
  const [addResult, add] = useMutation<AddQueryMutation, AddQueryMutationVariables>(
    addQueryMutation,
  )
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ mode: 'onBlur', reValidateMode: 'onChange' })
  const toast = useToast()

  const onSubmit: SubmitHandler<Form> = async (data) => {
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

      setResponseData(response.data.data)

      setIsLoaded(true)
      const endTime = performance.now()
      const run = endTime - startTime
      setRuntime(run)
      console.log(run)
    } catch (error) {
      console.error(error)
      setIsLoaded(true)
    }
  }

  const handleClickRun = async () => {
    if (!isAuthenticated) {
      loginWithRedirect()
      return
    }
    try {
      const result = await add({ content: editorValue })
      if (result.error) {
        console.log('hi')
        throw new Error(result.error.message)
      }
    } catch (error) {
      console.error(error)
      toast({
        description: 'エラーが発生しました',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
      return
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
            <Button
              colorScheme='teal'
              onClick={handleClickRun}
              rightIcon={<VscRunAll />}
              type='submit'
            >
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
