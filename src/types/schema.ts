export type TableDefinition = {
  name: string
  data_type: string
  nullable: boolean
  dict_id: number
  dict_id_ordered: boolean
}

export type Table = {
  table_name: string
  table_definition: TableDefinition[]
}

export type DataBase = {
  db_name: string
  tables: Table[]
}

export type Catalog = {
  catalog_name: string
  db_list: DataBase[]
}

export type Schema = {
  schema_name: string
  catalogs: Catalog[]
}
