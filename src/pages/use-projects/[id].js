import useSWR from 'swr'
import Layout from '../../components/Layout'
import withSession from '../../lib/session'
import apiFetchGet from '../../lib/apiFetchGet'
import fetchJson from '../../lib/fetchJson'
import Link from 'next/link'
import FormEditProject from '../../components/FmEditProject'

export const getServerSideProps = withSession(async function({req, res, params}) {
  console.log("/use-projects/[id]:getServerSideProps")
  const user = req.session.get('user')
  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${params.id}`
  return {
    props: { user, url },
  }
})

const SsrProject = ({ user, url }) => {
  // const { data: project } = useSWR([url, user.token], apiFetchGet)
  const { data: project, mutate } = useSWR([url, user.token], apiFetchGet)

  const submitHandler = async (values, {setSubmitting}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = `http://localhost:8000/v1/projects/${project._id}`
    console.log(url)
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutate()
    console.log(json)
  }

  return (
    <Layout>
      <h1>Detail Project X</h1>
      <h3>
        SSR dengan hook withSession, data is fetched on page using SWR
      </h3>
      {!project && <h3>...</h3>}
      <h3>{project?.title.toUpperCase()}</h3>
      <br/>
      <Link href="/use-projects">
        <a>Back to Projects</a>
      </Link>
      <br/>

      {project && (
        <div>
          <br />
          <FormEditProject model={ project } submitHandler={submitHandler} />
          <br />
        </div>
      )}

      <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre>
      <style jsx>{`
        a {
          font-size: 1.125rem;
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid #fff;
        }
        a:hover {
          color: #00a0ff;
          border-bottom-color: #00a0ff;
        }
      `}</style>
    </Layout>
  )
}
export default SsrProject
