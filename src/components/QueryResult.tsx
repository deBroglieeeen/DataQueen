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
} from '@chakra-ui/react'
import React from 'react'

type Props = {
  responseData: Object[]
}

const QueryResult: React.VFC<Props> = ({ responseData }) => {
  return responseData ? (
    <>
      <TableContainer marginTop='40px'>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>実行結果</TableCaption>
          <Thead>
            <Tr>
              {Object.keys(responseData[0]).map((key) => (
                <Th key={key.toString()}>{key}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {responseData.map((data) => (
              <Tr key={data.toString()}>
                {Object.values(data).map((value) => (
                  <Td key={value.toString()}>{value}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            {Object.keys(responseData[0]).map((key) => (
              <Th key={key.toString()}>{key}</Th>
            ))}
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  ) : (
    <TableContainer marginTop='40px'>
      <Table variant='striped' colorScheme='teal'>
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
