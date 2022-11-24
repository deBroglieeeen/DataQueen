import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from '@chakra-ui/react'
import React from 'react'
import ExcelJS from 'exceljs'

type Props = {
  //   columns: string[]
  //   rows: any
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

    //worksheet.columns = columns.map((x) => ({ header: x, key: x }))
    worksheet.columns = Object.keys(data[0]).map((x) => ({ header: x, key: x }))
    //     const _temp = data.map((row) =>
    //       row.forEach((key: string, value: any) => ({
    //         key: value,
    //       })),
    //     )
    worksheet.addRows(data)
    //     const displayMapValues = (key, value, map) => {

    //     }
    //     worksheet.columns = [
    //       { header: 'ID', key: 'id' },
    //       { header: '作成日時', key: 'createdAt' },
    //       { header: '名前', key: 'name' },
    //     ]
    //     worksheet.addRows([
    //       {
    //         id: 'f001',
    //         createdAt: 1629902208,
    //         name: 'りんご',
    //       },
    //       {
    //         id: 'f002',
    //         createdAt: 1629902245,
    //         name: 'ぶとう',
    //       },
    //       {
    //         id: 'f003',
    //         createdAt: 1629902265,
    //         name: 'ばなな',
    //       },
    //     ])

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
