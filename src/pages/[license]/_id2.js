import withSession from '../../lib/session'
// import useUser from '../../lib/useUser'
import useProject from '../../lib/useProject'
import Layout from '../../components/Layout'
// import { useRouter } from 'next/router';
import useSWR from 'swr'
import apiFetchGet from '../../lib/apiFetchGet'
import Projects from '../../components/Projects'

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user")
  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }
  console.log(user.token)
  // [ '', 'burhan', '5f3beb8fd34e762ab0535f22?kol' ]
  const urlParts = req.url.split("/")
  const id = urlParts[urlParts.length -1].substr(0, 24)

  // useSWR and other hooks wont run here: Hooks can only be called
  // inside of the body of a function component.
  // const { project } = useProject({id})
  // const { data: project, mutate: mutateProject } = useSWR(`https://aces-api-dev.herokuapp.com/v1/projects/${id}`)

  return {
    props: {id: id, token: user.token}
  }
})

const ProjectPage = ({ id, token }) => {
  // User session is hendled in getServerSideProps
  const url = `https://aces-api-dev.herokuapp.com/v1/projects/${id}`
  const { data: project, mutate: mutateProject} = useSWR([url, token], apiFetchGet)

  if (!project) return (
    <Layout>
      <h1>Your Project Info</h1>
      <h3>SSR</h3>
      <p>Loading...</p>

      {/* <Projects /> */}
    </Layout>
  )

  return (
    <Layout>
      <h1>Your Project Info</h1>
      <h3>SSR</h3>

      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>

      {/* <Projects /> */}
    </Layout>
  )
}

export default ProjectPage
