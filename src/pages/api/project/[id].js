import withSession from '../../../lib/session'
import useProject from '../../../lib/useProject'
import useRouter from 'next/router'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  console.log('=================')
  console.log(user)
  console.log(req.query.id)
  // const router = useRouter()
  const id = req.query.id

  if (user) {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${id}`
    console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      }
    })
    const project = await response.json()
    console.log(project)
    res.json(project)
  } else {
    res.json({})
  }
})
