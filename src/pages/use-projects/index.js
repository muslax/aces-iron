import useProjects2 from '../../lib/useProjects2'
import Layout from '../../components/Layout'
import Link from 'next/link'

const ViaUseProjects = () => {
  const { projects } = useProjects2({ redirectTo: '/' })
  if (!projects) return (
    <Layout>
      <h1>Projects via useProjects</h1>
      <p>...</p>
    </Layout>
  )

  return (
    <Layout>
      <h1>Projects via useProjects</h1>

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

export default ViaUseProjects
