import useUser from '../lib/useUser'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

const SGProjects = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <Layout>loading...</Layout>
  }

  return (
    <Layout>
      <h1>Projects using component</h1>
      {/* <h3>
        Projects component using SWR with JSON Web Token
      </h3> */}

      <Projects />

    </Layout>
  )
}

export default SGProjects
