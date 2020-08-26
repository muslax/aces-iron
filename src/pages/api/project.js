import withSession from '../../lib/session'
import useRouter from 'next/router'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  console.log(user)

  if (user) {
    const router = useRouter()
    const { id } = router.query
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
