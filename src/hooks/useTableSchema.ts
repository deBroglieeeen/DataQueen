import { config } from '@/config/axios'
import { RUST_API_BASE } from '@/config/constants'
import { Schema } from '@/types/schema'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export const useTableSchema = () => {
  const [schema, setSchema] = useState<Schema | null>(null)
  const { user } = useAuth0()

  const fetchSchema = useCallback(async () => {
    await axios(
      config(
        'post',
        'schema',
        JSON.stringify({
          unit: 'inprog',
        }),
      ),
    )
      .then((res) => {
        setSchema(res.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  useEffect(() => {
    if (!!user) {
      fetchSchema()
    }
    return () => {
      setSchema(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    schema,
  }
}
