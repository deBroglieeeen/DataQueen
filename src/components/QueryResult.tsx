import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Thead,
  Td,
  Tbody,
  Th,
  Tfoot,
  Skeleton,
  Box,
  Text,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CSVExportButton } from './CSVExportButton'

type Props = {
  responseData: Map<String, any>[]
  isLoaded: boolean
  runtime: Date
}

const QueryResult: React.VFC<Props> = ({ responseData, isLoaded, runtime }) => {
  useEffect(() => {}, [responseData])
  return responseData ? (
    <>
      <Box display='flex'>
        <CSVExportButton data={responseData} />
        <Box marginLeft='20px' paddingTop='5px'>
          <Text>{`クエリ実行時間: ${(runtime / 1000).toFixed(3)}秒`}</Text>
        </Box>
      </Box>

      <TableContainer>
        <Skeleton isLoaded={isLoaded}>
          <Table variant='striped' bg='#EEE6F8'>
            <TableCaption placement='top'>実行結果</TableCaption>
            <Thead>
              <Tr>
                {Object.keys(responseData[0]).map((key) => (
                  <Th key={`head${key.toString()}`}>{key}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {responseData.map((data, index) => (
                <Tr key={`body Tr ${index}`}>
                  {Object.values(data).map((value, index) => (
                    <Td key={`${data.toString()}${index}${value.toString()}`}>{value}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                {Object.keys(responseData[0]).map((key) => (
                  <Th key={`foot${key.toString()}`}>{key}</Th>
                ))}
              </Tr>
            </Tfoot>
          </Table>
        </Skeleton>
      </TableContainer>
    </>
  ) : (
    <TableContainer marginTop='40px'>
      <Table variant='striped' bg='#EEE6F8'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export { QueryResult }
