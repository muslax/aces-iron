import useSWR from 'swr'
import Layout from '../../components/Layout'
import withSession from '../../lib/session'
import apiFetchGet from '../../lib/apiFetchGet'

export const getServerSideProps = withSession(async function({req, res}) {
  const user = req.session.get('user')
  const path = req.url
  const id = path.substr(path.lastIndexOf("/") +1, 24)
  const url = `https://aces-api-dev.herokuapp.com/v1/projects/${id}`

  return {
    props: { user, url },
  }
})

const SsrProject = ({ user, url }) => {
  const { data: project } = useSWR([url, user.token], apiFetchGet)

  return (
    <Layout>
      <p>{url}</p>
      <pre className="pre">{JSON.stringify(user, undefined, 2)}</pre>
      <br/>
      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>
    </Layout>
  )
}
export default SsrProject