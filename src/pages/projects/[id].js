import useSWR from 'swr'
import Layout from '../../components/Layout'
import withSession from '../../lib/session'
import apiFetchGet from '../../lib/apiFetchGet'
import Link from 'next/link'

export const getServerSideProps = withSession(async function({req, res, params}) {
  const user = req.session.get('user')
  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  const url = `https://aces-api-dev.herokuapp.com/v1/projects/${params.id}`
  return {
    props: { user, url },
  }
})

const SsrProject = ({ user, url }) => {
  const { data: project } = useSWR([url, user.token], apiFetchGet)

  return (
    <Layout>
      {/* <p>{url}</p> */}
      {/* <pre className="pre">{JSON.stringify(user, undefined, 2)}</pre> */}
      <h1>Detail Project</h1>
      <h3>
        SSR dengan hook withSession, data is fetched on page using SWR
      </h3>
      {!project && <h3>...</h3>}
      <h3>{project?.title.toUpperCase()}</h3>
      <br/>
      <Link href="/sg-projects">
        <a>Back to Projects</a>
      </Link>
      <br/>
      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>
      <style jsx>{`
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
    </Layout>
  )
}
export default SsrProject