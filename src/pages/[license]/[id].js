import withSession from '../../lib/session'
import useUser from '../../lib/useUser'
import useProject from '../../lib/useProject'
import Layout from '../../components/Layout'
import Link from 'next/link'
// import { useRouter } from 'next/router';
import useSWR from 'swr'
import apiFetchGet from '../../lib/apiFetchGet'
import Projects from '../../components/Projects'

// https://aces-api-dev.herokuapp.com/v1/licenses/burhan/projects
// https://aces-api-dev.herokuapp.com/v1/licenses/burhan/projects/5f3beb8fd34e762ab0535f22

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://aces-api-dev.herokuapp.com/v1/licenses/burhan/projects')
  const projects = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project) => ({
    params: { id: project._id, license: project.license },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  const res = await fetch(`https://aces-api-dev.herokuapp.com/v1/licenses/${params.license}/projects/${params.id}`)
  const project = await res.json()

  // Pass post data to the page via props
  return { props: { project } }
}

const ProjectPage = ({ project }) => {
  const { user } = useUser({ redirectTo: '/login' })

  // const url = `https://aces-api-dev.herokuapp.com/v1/projects/${id}`
  // const { data: project, mutate: mutateProject} = useSWR([url, token], apiFetchGet)

  if (!project) return (
    <Layout>
      <h1>Detail Project</h1>
      <h3>Full static dengan getStaticPaths & getStaticProps</h3>
      <p>Loading...</p>

      {/* <Projects /> */}
    </Layout>
  )

  return (
    <Layout>
      <h1>Detail Project</h1>
      <h3>Full static dengan getStaticPaths & getStaticProps</h3>
      <h3>{project?.title.toUpperCase()}</h3>
      <br/>
      <Link href="/sg-projects">
        <a>Back to Projects</a>
      </Link>

      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>

      {/* <Projects /> */}
    </Layout>
  )
}

export default ProjectPage
