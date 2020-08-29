import useProjects2 from '../lib/useProjects2'
import withSession from '../lib/session'
import Layout from '../components/Layout'
import Link from 'next/link'

export const getServerSideProps = withSession(async function({req, res, params}) {
  console.log("/ssr-projects:getServerSideProps")
  const user = req.session.get('user')
  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  // const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${params.id}`
  return {
    props: { user },
  }
})

const SSRProjects = ({ user }) => {
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

      <pre className="pre">{JSON.stringify(user, undefined, 2)}</pre>

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

export default SSRProjects
