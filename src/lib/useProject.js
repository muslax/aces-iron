import useSWR from 'swr'

export default function useProject(id) {
  // const { data: project, mutate: mutateProject } = useSWR(`/api/project/${id}`)
  // const { data: project, mutate: mutateProject } = useSWR(`https://aces-api-dev.herokuapp.com/v1/projects/${id}`)
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${id}`
  const { data: project, mutate: mutateProject } = useSWR(url)
  // const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${id}`
  // const { data: project, mutate: mutateProject } = useSWR(url)
  console.log(project)
  return { project, mutateProject }
}
