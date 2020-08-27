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

  return (
    <Layout>
      <h1>License Info</h1>
      <h3>useLicense via NextJS API (/api/license)</h3>
      {!license && <p>Loading...</p>}
      {license && (
        <pre className="pre">{JSON.stringify(license, undefined, 2)}</pre>
      )}
    </Layout>
  )
}

export default SGLicense
