import jwt from 'jsonwebtoken'

export const createMeeting = async ({slot, details}) => {
  const payload = {
    iss: process.env.ZOOM_API_KEY,
    exp: new Date().getTime() + 5000
  }
  const token = jwt.sign(payload, process.env.ZOOM_API_SECRET)

  const response = await fetch('https://api.zoom.us/v2/users/7T-iWqpwTjKaucHGbsirNQ/meetings', {
    method: 'POST',
    headers: {
      'User-Agent': 'Zoom-api-Jwt-Request',
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      topic: `Erstgespräch ${details.firstName} & Lukas`,
      start_time: `${slot.start.dateTime.split('.')[0]}Z`,
      duration: slot.duration,
      schedule_for: 'mail@lukaswiesehan.de',
      password: '980218',
      agenda:
        'Wir sprechen über Dein Unternehmen, Deine Werte & Ziele und natürlich über Dein Produkt, um das es geht. In einer Analyse stellen wir gemeinsam grobe Anforderungen fest und ich zeige Dir auf, wie Deine Next-Level Produktwebsite aussehen könnte.',
      settings: {
        host_video: true,
        participant_video: true,
        waiting_room: false,
        email_notification: false
      }
    })
  })
  const data = await response.json()
  return data
}
