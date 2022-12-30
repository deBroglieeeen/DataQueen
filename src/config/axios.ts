import { RUST_API_BASE } from './constants'

export const config = (method: 'get' | 'post', uri: 'schema' | 'query', data: any) => ({
  method: method,
  url: RUST_API_BASE + uri,
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
})
