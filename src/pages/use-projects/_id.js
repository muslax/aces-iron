import withSession from '../../lib/session'
import Layout from '../../components/Layout'

/*
Fetching di server malah lama
*/

export const getServerSideProps = withSession(async function({req, res, params}) {
  const user = req.session.get('user')
  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${params.id}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
    }
  })
  const project = await response.json()
  return {
    props: { project },
  }
})

const ProjectByID = ({ project }) => {



  return (
    <Layout>
      <h1>useProjects</h1>
      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>
    </Layout>
  )
}

export default ProjectByID
