import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { table } from 'console'

type column = {
  id: number
  name: string
}

type table = {
  id: number
  name: string
  columns: column[]
}

const dummyData = {
  dataset: {
    databases: [
      {
        id: 1,
        name: 'database1',
        tables: [
          {
            id: 1,
            name: 'table1',
            columns: [
              {
                id: 1,
                name: 'column1',
              },
              {
                id: 2,
                name: 'column2',
              },
              {
                id: 3,
                name: 'column3',
              },
            ],
          },
          {
            id: 2,
            name: 'table2',
            columns: [
              {
                id: 1,
                name: 'column1',
              },
              {
                id: 2,
                name: 'column2',
              },
              {
                id: 3,
                name: 'column3',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'database2',
        tables: [
          {
            id: 1,
            name: 'table1',
            columns: [
              {
                id: 1,
                name: 'column1',
              },
              {
                id: 2,
                name: 'column2',
              },
              {
                id: 3,
                name: 'column3',
              },
            ],
          },
          {
            id: 2,
            name: 'table2',
            columns: [
              {
                id: 1,
                name: 'column1',
              },
              {
                id: 2,
                name: 'column2',
              },
              {
                id: 3,
                name: 'column3',
              },
            ],
          },
        ],
      },
    ],
  },
}

export const SqlSidebar = () => {
  const renderColumns = (columns: column[]) => {
    return (
      <>
        {columns.map(({ id, name }) => {
          return <Box key={id}>{name}</Box>
        })}
      </>
    )
  }

  const renderTables = (tables: table[]) => {
    return (
      <>
        <Accordion allowMultiple>
          {tables.map(({ id, name, columns }) => {
            return (
              <AccordionItem key={id}>
                <AccordionButton>
                  <AccordionIcon />
                  {name}
                </AccordionButton>
                <AccordionPanel>{renderColumns(columns)}</AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </>
    )
  }
  return (
    <>
      <Box w={`160px`} paddingTop={`80px`} paddingLeft={`16px`}>
        <Accordion allowMultiple>
          {dummyData.dataset.databases.map(({ id, name, tables }) => {
            return (
              <AccordionItem key={id}>
                <AccordionButton>
                  <AccordionIcon />
                  <Box>{name}</Box>
                </AccordionButton>
                <AccordionPanel>{renderTables(tables)}</AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Box>
    </>
  )
}
