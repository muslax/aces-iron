import useProjects3 from '../lib/useProjects3'
import Layout from '../components/Layout'
import Link from 'next/link'

const SG3Projects = () => {
  const { swrUser, projects } = useProjects3({ redirectTo: '/' })
  // if (!swrUser || swrUser.isLoggedIn === false) {
  //   return <div></div>
  // }

  // const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
  // const { data, mutate } = useSWR([url, user?.token], apiFetchGet)

  if (!projects) return (
    <Layout>
      <h1>SG Projects via SWR</h1>
      <p>...</p>
    </Layout>
  )

  return (
    <Layout>
      <h1>SG Projects via SWR</h1>

      {swrUser && <pre className="pre">{JSON.stringify(swrUser, undefined, 2)}</pre>}

      {projects?.map((project) => (
        <div>
          <h3>
            <Link href={`/use-projects/[id]`} as={`/use-projects/${project._id}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <p>Client: {project.client}</p>
        </div>
      ))}
    </Layout>
  )
}

export default SG3Projects
