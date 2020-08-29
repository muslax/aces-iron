import withSession from '../../lib/session'
import Router from 'next/router'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  console.log(user)

  // if (!user) {
    // Router.push("/")
  // }

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
    // console.log("BEFORE PROJECTS")
    // console.log(projects)
    // console.log("AFTER PROJECTS")
    // res.json({ data: projects })
    res.json( projects )
  } else {
    // res.json({ projects: false })
    Router.push("/login")
  }
})
