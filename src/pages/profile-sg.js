import useUser from '../lib/useUser'
import Layout from '../components/Layout'
import License from '../components/License'
// import Projects from '../components/Projects'
// import MyProjects from '../components/MyProjects'

const SgProfile = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return (
      <Layout>
        <h3>Loading...</h3>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>User Profile</h1>
      <h3>
        useUser via NextJS API (/api/user) dengan hook withSession
      </h3>

      <pre className="pre">{JSON.stringify(user, undefined, 2)}</pre>

      <License />
    </Layout>
  )
}

export default SgProfile
