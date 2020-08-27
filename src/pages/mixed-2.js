import useUser from '../lib/useUser'
import useLicense from '../lib/useLicense'
import useProjects from '../lib/useProjects'
import Layout from '../components/Layout'
import License from '../components/License'
import Projects from '../components/Projects'

const MixedPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  if (!user || user.isLoggedIn === false) return <div></div>

  // const { license } =  useLicense({})
  // const { projects } = useProjects({})

  return (
    <Layout>
      <h1>React Hooks</h1>

      <h3>License component</h3>
      {/* <pre className="pre">{JSON.stringify(license, undefined, 2)}</pre> */}
      <License />

      {/* <h3>useProjects</h3> */}
      {/* <pre className="pre">{JSON.stringify(projects, undefined, 2)}</pre> */}
      <Projects />
    </Layout>
  )
}

export default MixedPage