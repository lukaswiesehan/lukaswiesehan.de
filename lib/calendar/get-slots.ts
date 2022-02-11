import {JWT} from 'google-auth-library'

import {Slot} from '@lib/types/slot'

export const getSlots = async (): Promise<Slot[]> => {
  const client = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar']
  })
  const endpoint = 'https://www.googleapis.com/calendar/v3/calendars/mail@lukaswiesehan.de/events'

  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0)

  const query = new URLSearchParams({
    singleEvents: 'true',
    orderBy: 'startTime',
    timeMin: tomorrow.toJSON()
  })

  const response = await client.request<any>({
    url: `${endpoint}?${query.toString()}`
  })

  const slots = response.data.items
    .filter((e) => e.summary == 'Meeting-Slot')
    .map((e) => {
      const start = new Date(e.start.dateTime)
      const end = new Date(e.end.dateTime)
      return {
        id: e.id,
        timezone: e.start.timeZone,
        start: {
          dateTime: start,
          day: start.getDate(),
          month: start.getMonth() + 1,
          year: start.getFullYear(),
          hours: start.getHours(),
          minutes: start.getMinutes()
        },
        end: {
          hours: end.getHours(),
          minutes: end.getMinutes()
        },
        duration: Math.round((end.getTime() - start.getTime()) / 60000)
      }
    })

  return slots
}
