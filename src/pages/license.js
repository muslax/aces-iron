import useUser from '../lib/useUser'
import useLicense from '../lib/useLicense'
import Layout from '../components/Layout'

const SGLicense = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const { license } = useLicense({})

  if (!user || user.isLoggedIn === false) {
    return (
      <Layout></Layout>
    )
  }

  if (!license) {
    return (
      <Layout>
        <h1>License Info</h1>
        <h3>useLicense</h3>
        <p>Loading...</p>
      </Layout>
    )
  }

  // const { license } = useLicense({ token: user.token })

  return (
    <Layout>
      <h1>License Info</h1>
      <h3>useLicense via NextJS API (/api/license)</h3>
      <pre className="pre">{JSON.stringify(license, undefined, 2)}</pre>
    </Layout>
  )
}

export default SGLicense
