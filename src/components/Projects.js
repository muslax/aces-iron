import Link from 'next/link'
import useProjects from '../lib/useProjects'

const Projects = () => {
  const { projects } = useProjects({})

  if (!projects) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3>Project component</h3>
      {projects.map((project) => (
        <div key={project._id}>
        {/* Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. */}
          <Link href={`/projects/[id]`} as={`/projects/${project._id}`}>
            <a className="abc"><code>{project._id}</code></a>
          </Link>{` `}
          <span> &nbsp;&nbsp;&nbsp; </span>{` `}
          <Link href={`/[license]/[id]`} as={`/${project.license}/${project._id}`}>
          <a className="abc"><code>{project._id}</code></a>
          </Link>
        </div>
      ))}
      <br/>
      <pre className="pre">{JSON.stringify(projects, undefined, 2)}</pre>
      <style jsx>{`
      div {
        margin-bottom: 6px;
      }
        a {
          font-size: 1.125rem;
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid #fff;
        }
        a:hover {
          color: #00a0ff;
          border-bottom-color: #00a0ff;
        }
      `}</style>
    </div>
  )
}

export default Projects
