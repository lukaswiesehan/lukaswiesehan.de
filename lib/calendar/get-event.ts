import {useClient} from '@lib/calendar/use-client'

export const getEvent = async (id: string): Promise<any> => {
  const client = useClient()
  const endpoint = 'https://www.googleapis.com/calendar/v3/calendars/mail@lukaswiesehan.de/events'

  const response = await client.request({url: `${endpoint}/${id}`})

  return response.data
}
