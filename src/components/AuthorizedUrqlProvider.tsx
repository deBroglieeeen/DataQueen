import { useAuth0 } from '@auth0/auth0-react'
import { FC, ReactNode } from 'react'
import {
  cacheExchange,
  createClient,
  dedupExchange,
  Exchange,
  fetchExchange,
  Operation,
  Provider,
} from 'urql'
import { fromPromise, fromValue, map, mergeMap, pipe } from 'wonka'
import { API_HOST } from '../config/constants'

type Props = {
  children: ReactNode
}

const AuthorizedUrqlProvider: FC<Props> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0()

  const fetchOptionsExchange =
    (fn: any): Exchange =>
    ({ forward }) =>
    (ops$) => {
      return pipe(
        ops$,
        mergeMap((operation: Operation) => {
          const result = fn(operation.context.fetchOptions)
          return pipe(
            (typeof result.then === 'function' ? fromPromise(result) : fromValue(result)) as any,
            map((fetchOptions: RequestInit | (() => RequestInit)) => ({
              ...operation,
              context: { ...operation.context, fetchOptions },
            })),
          )
        }),
        forward,
      )
    }

  const client = createClient({
    url: API_HOST,
    exchanges: [
      dedupExchange,
      cacheExchange,
      fetchOptionsExchange(async (fetchOptions: any) => {
        const token = await getAccessTokenSilently().catch(() => null)

        return Promise.resolve({
          ...fetchOptions,
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
        })
      }),
      fetchExchange,
    ],
  })

  return <Provider value={client}>{children}</Provider>
}

export { AuthorizedUrqlProvider }
