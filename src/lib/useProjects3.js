import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import useUser from './useUser'
import apiFetchGet from '../lib/apiFetchGet'

// export default function useProjects() {
//   const { data: projects, mutate: mutateProjects } = useSWR("/api/projects")
//   return { projects, mutateProjects }
// }

// export default function useProjects2() {
export default function useProjects3({redirectTo = false, redirectIfFound = false} = {}) {
  const { user } = useUser({ redirectTo: redirectTo })
  console.log("=================")
  const url1 = process.env.NEXT_PUBLIC_BASE_API_URL + `/users/${user?.username}`
  console.log(url1)
  const url2 = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
  const token = user ? user.token : null
  const { data: swrUser } = useSWR([url1, token], apiFetchGet)
  const { data: projects, mutate: mutateProjects } = useSWR([url2, token], apiFetchGet)
  // console.log(user)
  // console.log(projects)

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo)
    }
  }, [projects, redirectTo])

  return { swrUser, projects, mutateProjects }
}