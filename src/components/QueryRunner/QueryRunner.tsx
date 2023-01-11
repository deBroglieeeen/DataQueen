import { Box, Button, useToast } from '@chakra-ui/react'
import { VscRunAll } from 'react-icons/vsc'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState, FC, Dispatch, SetStateAction } from 'react'
import axios from 'axios'
import Editor from '@monaco-editor/react'
import { useMutation } from 'urql'
import { AddQueryMutation, AddQueryMutationVariables } from '@/generated/graphql'
import { addQueryMutation } from '@/graphql/query'
import { useAuth0 } from '@auth0/auth0-react'
import { config } from '@/config/axios'

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
  const { handleSubmit } = useForm<Form>({ mode: 'onBlur', reValidateMode: 'onChange' })
  const toast = useToast()

  const onSubmit: SubmitHandler<Form> = async (data) => {
    // Todo: custom hookにしてロジック切り出す
    try {
      const startTime = performance.now()
      setIsLoaded(false)
      const response = await axios(
        config(
          'post',
          'query',
          JSON.stringify({
            query: editorValue,
            date: '20220101',
          }),
        ),
      )

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

  const [editorValue, setEditorValue] = useState('SELECT * FROM User')
  function handleEditorChange(value: any, event: any) {
    console.log('here is the current model value:', value)
    setEditorValue(value)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button onClick={handleClickRun} rightIcon={<VscRunAll />} type='submit'>
          実行
        </Button>
        <Box paddingTop={`40px`} paddingBottom={`40px`} maxW={`100%`}>
          <Editor
            height='316px'
            defaultLanguage='sql'
            defaultValue='SELECT * FROM User;'
            onChange={handleEditorChange}
          />
        </Box>
      </form>
    </>
  )
}

export { QueryRunner }
