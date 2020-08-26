import useUser from '../../lib/useUser'
import useProject from '../../lib/useProject'
import Layout from '../../components/Layout'
import Project from '../../components/Project'

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  // const paths = posts.map((post) => ({
  //   params: { id: post.id },
  // }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  const paths = [
    {params: {license: 'burhan', id: '5f3beb8fd34e762ab0535f22'}},
    {params: {license: 'burhan', id: '5f3befcdb0c53278843a5f38'}},
    {params: {license: 'burhan', id: '5f3c344b657da2f592b10c41'}},
    {params: {license: 'burhan', id: '5f3c96f0e3a4a723dd607b75'}},
    {params: {license: 'burhan', id: '5f3c9776c0e188779d890afe'}},
  ]
  return { paths: paths, fallback: true}
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:8000/v1/licenses/${params.license}/${params.id}`)
  const project = await res.json()

  // Pass post data to the page via props
  return { props: { project } }
}

const AProject = ({ project }) => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <Layout>loading...</Layout>
  }

  return (
    <Layout>
      <h1>{project.title}</h1>
      <h3>
        StaticGen
        and the /api/user route using SWR
      </h3>

      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>

      {/* <Project /> */}
    </Layout>
  )
}

export default AProject
