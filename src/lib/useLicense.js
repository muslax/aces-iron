import { useEffect } from 'react'
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function useLicense({
  // token = false
  redirectTo = false,
} = {}) {
  // const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/licenses'
  // https://swr.vercel.app/docs/arguments
  // const { data: user } = useSWR(['/api/user', token], fetchWithToken)
  // const { data: license, mutate: mutateLicense } = useSWR([url, token], apiFetchGet)
  const { data: license, mutate: mutateLicense } = useSWR("/api/license")

  useEffect(() => {
    if (redirectTo) return
  }, [license])

  return { license, mutateLicense }
}

// OR COULD IT BE DONE WITH whithSession?