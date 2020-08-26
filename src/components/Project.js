import Link from 'next/link'
import useProject from '../lib/useProject'

const Project = (id) => {
  const { project } = useProject(id)
  console.log(project)

  if (!project) {
    return <div>Loading...ssss</div>
  }

  return (
    <div>
      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>
    </div>
  )
}

export default Project
