import { Button } from '@chakra-ui/react'
import React from 'react'
import ExcelJS from 'exceljs'

type Props = {
  data: Map<String, any>[]
}

const CSVExportButton: React.VFC<Props> = ({ data }) => {
  const handlerClickDownloadButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format: 'xlsx' | 'csv',
  ) => {
    e.preventDefault()

    const workbook = new ExcelJS.Workbook()
    workbook.addWorksheet('sheet1')
    const worksheet = workbook.getWorksheet('sheet1')
    worksheet.columns = Object.keys(data[0]).map((x) => ({ header: x, key: x }))
    worksheet.addRows(data)

    const uint8Array =
      format === 'xlsx'
        ? await workbook.xlsx.writeBuffer() //xlsxの場合
        : await workbook.csv.writeBuffer() //csvの場合
    const blob = new Blob([uint8Array], { type: 'application/octet-binary' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Data' + `${Date.now()}.` + format //フォーマットによってファイル拡張子を変えている
    a.click()
    a.remove()
  }
  return (
    <>
      <Button onClick={(e) => handlerClickDownloadButton(e, 'csv')} colorScheme='purple'>
        CSV形式で出力
      </Button>
    </>
  )
}

export { CSVExportButton }
