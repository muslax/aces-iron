import Link from 'next/link'
import useProjects from '../lib/useProjects'

const Projects = () => {
  const { projects } = useProjects({})

  if (!projects) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3>PROJECTS COMPONENT</h3>
      {projects.map((project) => (
        <p key={project._id}>
        {/* Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. */}
          <Link href={`/[license]/[project]`} as={`/${project.license}/${project._id}`}>
            <a className="abc">{project._id}</a>
          </Link>
        </p>
      ))}
      <pre className="pre">{JSON.stringify(projects, undefined, 2)}</pre>
    </div>
  )
}

export default Projects
