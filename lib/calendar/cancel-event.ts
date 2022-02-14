import {JWT} from 'google-auth-library'

export const cancelEvent = async ({event}) => {
  const client = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar']
  })
  const endpoint = 'https://www.googleapis.com/calendar/v3/calendars/mail@lukaswiesehan.de/events'

  const response = await client.request({
    url: `${endpoint}/${event.id}`,
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      start: event.start,
      end: event.end,
      summary: 'Meeting-Slot',
      location: '',
      description: ''
    })
  })

  if (response.status != 200) throw {message: 'Error updating Google Calendar entry.'}
  return true
}
