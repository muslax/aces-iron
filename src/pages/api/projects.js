import withSession from '../../lib/session'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  console.log(user)

  if (user) {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      }
    })
    const projects = await response.json()
    console.log(projects)
    res.json(projects)
  } else {
    res.json({})
  }
})
