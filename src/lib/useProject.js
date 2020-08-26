import useSWR from 'swr'

export default function useProject(id) {
  // const { data: project, mutate: mutateProject } = useSWR(`/api/project/${id}`)
  const { data: project, mutate: mutateProject } = useSWR(`https://aces-api-dev.herokuapp.com/v1/projects/${id}`)
  // const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${id}`
  // const { data: project, mutate: mutateProject } = useSWR(url)
  console.log(project)
  return { project, mutateProject }
}

/*

v1/licenses/{slug}

v1/licenses/{slug}/users
v1/licenses/{slug}/users/{id}

v1/licenses/{slug}/clients
v1/licenses/{slug}/clients/{id}

v1/licenses/{slug}/contracts
v1/licenses/{slug}/contracts/{id}

v1/licenses/{slug}/projects
v1/licenses/{slug}/projects/{id}

v1/projects/{id}/batches
v1/projects/{id}/batches/{id}

v1/projects/{id}/modules
v1/projects/{id}/modules/{id}

v1/projects/{id}/members
v1/projects/{id}/members/{username}

v1/projects/{id}/personas
v1/projects/{id}/personas/{id}

*/