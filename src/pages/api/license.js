import withSession from '../../lib/session'
import useSWR from 'swr'
import apiFetchGet from '../../lib/apiFetchGet'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  console.log(user)

  if (user) {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/licenses'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      }
    })
    const license = await response.json()
    console.log(license)
    res.json(license)
  } else {
    res.json({})
  }
})
