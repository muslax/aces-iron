import Layout from '../components/Layout'
import withSession from '../lib/session'
import PropTypes from 'prop-types'

const SsrLicense = ({ license }) => {
  if (!license) return (
    <p>Loading...</p>
  )
  return (
    <Layout>
      <h1>SSR License</h1>
      <h3>
        SSR and getServerSideProps
      </h3>

      {license && (
        <>
          <pre className="pre">{JSON.stringify(license, undefined, 2)}</pre>
        </>
      )}
    </Layout>
  )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user')

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/licenses'
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
    }
  })

  const license = await response.json()
  return {
    props: { license: license },
  }
})

export default SsrLicense

// SsrLicense.propTypes = {
//   user: PropTypes.shape({
//     isLoggedIn: PropTypes.bool,
//     login: PropTypes.string,
//     avatarUrl: PropTypes.string,
//   }),
// }
