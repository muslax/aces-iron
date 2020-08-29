import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import useUser from './useUser'
import apiFetchGet from '../lib/apiFetchGet'

// export default function useProjects() {
//   const { data: projects, mutate: mutateProjects } = useSWR("/api/projects")
//   return { projects, mutateProjects }
// }


export default function useProjects({redirectTo} = {}) {
  const { user } = useUser({ redirectTo: '/login' })
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
  const { data: projects, mutate: mutateProjects } = useSWR([url, user.token], apiFetchGet)

  useEffect(() => {
    if (!user || user.isLoggedIn === false) {
      Router.push(redirectTo)
    }
  }, [projects, redirectTo])

  return { projects, mutateProjects }
}