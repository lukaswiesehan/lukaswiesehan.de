import jwt from 'jsonwebtoken'

export const deleteMeeting = async ({id}) => {
  const payload = {
    iss: process.env.ZOOM_API_KEY,
    exp: new Date().getTime() + 5000
  }
  const token = jwt.sign(payload, process.env.ZOOM_API_SECRET)

  const response = await fetch(`https://api.zoom.us/v2/meetings/${id}`, {
    method: 'DELETE',
    headers: {
      'User-Agent': 'Zoom-api-Jwt-Request',
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  if (response.status != 204) throw {message: 'Error deleting Zoom meeting.'}
  return true
}
