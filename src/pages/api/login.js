import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'

export default withSession(async (req, res) => {
  const { formBody } = await req.body
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/token'

  try {
    // we check that the user exists on GitHub and store some data in session
    const json = await fetchJson(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
    const token = json.access_token
    const userData = json.user
    const user = {
      isLoggedIn: true,
      id: userData.id,
      license: userData.license,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      licenseOwner: userData.licenseOwner,
      verified: userData.verified,
      disabled: userData.disabled,
      userRoles: userData.userRoles,
      token: token,
    }
    req.session.set('user', user)
    req.session.set('token', token)
    await req.session.save()
    res.json(user)
  } catch (error) {
    const { response: fetchResponse } = error
    // res.status(fetchResponse?.status || 500).json(error.data)
    res.status(404).json({ message: "Couldn't verify username and password." })
  }
})
