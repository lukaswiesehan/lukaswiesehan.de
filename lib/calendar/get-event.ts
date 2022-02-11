import {JWT} from 'google-auth-library'

export const getEvent = async (id: string): Promise<any> => {
  const client = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar']
  })
  const endpoint = 'https://www.googleapis.com/calendar/v3/calendars/mail@lukaswiesehan.de/events'

  const response = await client.request({url: `${endpoint}/${id}`})

  return response.data
}
