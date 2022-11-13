import { Textarea, Box, Button, FormControl } from '@chakra-ui/react'
import { VscRunAll } from 'react-icons/vsc'
import { SubmitHandler, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
// import { parseTmTheme } from '@monaco-themes'

type Form = {
  query: string
}

type Props = {
  setResponseData: any
}

const QueryRunner: React.VFC<Props> = ({ setResponseData }) => {
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
      const response = await axios(config)
      console.log(response)
      setResponseData(response.data.data)
      console.log(response.data.data[0])
    } catch (error) {
      console.error(error)
    }
  }

  const dataqueen_dark = {
    base: 'vs',
    inherit: true,
    rules: [
      {
        background: '454741',
        token: '',
      },
      {
        foreground: '008e00',
        token: 'comment',
      },
      {
        foreground: '7d4726',
        token: 'meta.preprocessor',
      },
      {
        foreground: '7d4726',
        token: 'keyword.control.import',
      },
      {
        foreground: 'a3be8c',
        token: 'string',
      },
      {
        foreground: 'b48ead',
        token: 'constant.numeric',
      },
      {
        foreground: 'c800a4',
        token: 'constant.language',
      },
      {
        foreground: '275a5e',
        token: 'constant.character',
      },
      {
        foreground: '275a5e',
        token: 'constant.other',
      },
      {
        foreground: 'c800a4',
        token: 'variable.language',
      },
      {
        foreground: 'c800a4',
        token: 'variable.other',
      },
      {
        foreground: 'c800a4',
        token: 'keyword',
      },
      {
        foreground: 'c900a4',
        token: 'storage',
      },
      {
        foreground: '438288',
        token: 'entity.name.class',
      },
      {
        foreground: '790ead',
        token: 'entity.name.tag',
      },
      {
        foreground: '450084',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: '450084',
        token: 'support.function',
      },
      {
        foreground: '450084',
        token: 'support.constant',
      },
      {
        foreground: '790ead',
        token: 'support.type',
      },
      {
        foreground: '790ead',
        token: 'support.class',
      },
      {
        foreground: '790ead',
        token: 'support.other.variable',
      },
    ],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#FFFFFF',
      'editor.selectionBackground': '#B5D5FF',
      'editor.lineHighlightBackground': '#00000012',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#BFBFBF',
    },
  }

  const monaco = useMonaco()
  const [editorValue, setEditorValue] = useState('SELECT * FROM User')
  function handleEditorChange(value: any, event: any) {
    console.log('here is the current model value:', value)
    setEditorValue(value)
  }
  // useEffect(() => {
  //   if (monaco) {
  //     console.log('here is the monaco instance:', monaco)
  //     monaco.editor.defineTheme('dataqueen_dark', dataqueen_dark)
  //   }
  // }, [monaco])

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
              {/* <Textarea
                width='77vw'
                minH='316px'
                id='query'
                placeholder='SELECT * FROM User'
                {...register('query', { required: '入力してください' })}
              ></Textarea> */}
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  )
}

export { QueryRunner }
