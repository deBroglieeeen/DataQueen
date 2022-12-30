import { useTableSchema } from '@/hooks/useTableSchema'
import { DataBase, Table, TableDefinition } from '@/types/schema'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

export const SqlSidebar = () => {
  const { schema } = useTableSchema()

  const renderColumns = (columns: TableDefinition[]) => {
    return (
      <>
        {columns.map(({ name }) => {
          return (
            <Box key={name} textOverflow={`ellipsis`} overflow={`hidden`} whiteSpace={`nowrap`}>
              {name}
            </Box>
          )
        })}
      </>
    )
  }

  const renderTables = (tables: Table[]) => {
    return (
      <>
        <Accordion allowMultiple>
          {tables.map(({ table_name, table_definition }) => {
            return (
              <AccordionItem key={table_name}>
                <AccordionButton>
                  <AccordionIcon />
                  <Box textOverflow={`ellipsis`} overflow={`hidden`} whiteSpace={`nowrap`}>
                    {table_name}
                  </Box>
                </AccordionButton>
                <AccordionPanel>{renderColumns(table_definition)}</AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </>
    )
  }

  const renderDbList = (dbList: DataBase[]) => {
    return (
      <>
        <Accordion allowMultiple>
          {dbList.map(({ db_name, tables }) => {
            return (
              <AccordionItem key={db_name}>
                <AccordionButton>
                  <AccordionIcon />
                  {db_name}
                </AccordionButton>
                <AccordionPanel>{renderTables(tables)}</AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </>
    )
  }
  if (!schema) return <></>

  return (
    <>
      <Box w={`200px`} maxW={`max-content`} paddingTop={`80px`} paddingLeft={`16px`}>
        <Box>{schema.schema_name}</Box>
        <Accordion allowMultiple>
          {schema.catalogs.map(({ catalog_name, db_list }) => {
            return (
              <AccordionItem key={catalog_name}>
                <AccordionButton>
                  <AccordionIcon />
                  <Box>{catalog_name}</Box>
                </AccordionButton>
                <AccordionPanel>{renderDbList(db_list)}</AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Box>
    </>
  )
}
