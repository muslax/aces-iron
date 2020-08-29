import { useEffect } from 'react'
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function useLicense() {
  // const { data: license, mutate: mutateLicense } = useSWR("/api/license")
  const { data: license } = useSWR("/api/license")

  // useEffect(() => {
  //   if (redirectTo) return
  // }, [license])

  // return { license, mutateLicense }
  return { license }
}

// OR COULD IT BE DONE WITH whithSession?