
export default async function apiFetchPut(url, token, body=null) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: body
  })
  return response.json()
}