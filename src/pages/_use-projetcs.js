import useProjects2 from '../lib/useProjects2'
import Layout from '../components/Layout'

const ProjectsByAPI = () => {
  const { projects } = useProjects2({ redirectTo: '/' })
  if (!projects) return (
    <Layout>
      <h1>useProjects</h1>
      <p>...</p>
    </Layout>
  )

  return (
    <Layout>
      <h1>useProjects</h1>

      {projects.map((project) => (
        <div>
          <h3>{project.title}</h3>
          <p>Client: {project.client}</p>
        </div>
      ))}
    </Layout>
  )
}

export default ProjectsByAPI
