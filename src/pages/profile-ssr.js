import Layout from '../components/Layout'
// import MyProjects from '../components/MyProjects'
import withSession from '../lib/session'
import PropTypes from 'prop-types'

const SsrProfile = ({ user }) => {
  return (
    <Layout>
      <h1>Your GitHub profile</h1>
      <h3>
        SSR and getServerSideProps
      </h3>

      {user?.isLoggedIn && (
        <>
          <pre className="pre">{JSON.stringify(user, undefined, 2)}</pre>
        </>
      )}

      {/* <MyProjects /> */}
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

  return {
    props: { user: req.session.get('user') },
  }
})

export default SsrProfile

// SsrProfile.propTypes = {
//   user: PropTypes.shape({
//     isLoggedIn: PropTypes.bool,
//     login: PropTypes.string,
//     avatarUrl: PropTypes.string,
//   }),
// }
