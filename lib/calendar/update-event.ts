import {JWT} from 'google-auth-library'

export const updateEvent = async ({event, details, meeting}) => {
  const client = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar']
  })
  const endpoint = 'https://www.googleapis.com/calendar/v3/calendars/mail@lukaswiesehan.de/events'

  let location = ''
  let description = ''

  if (details.setting == 'zoom') {
    location = 'Zoom Meeting'
    description = `Erstgespräch mit ${details.firstName} ${details.lastName} bei Zoom.\n\nEmail-Adresse: ${details.email}\nBranche: ${details.industry}\n${
      details.message && `Details: ${details.message}`
    }\n\nZoom-Meeting starten:\n${meeting.start_url}`
  } else if (details.setting == 'phone') {
    location = 'Telefongespräch'
    description = `Telefonisches Erstgespräch mit ${details.firstName} ${details.lastName}.\n\nEmail-Adresse: ${details.email}\nBranche: ${
      details.industry
    }\n${details.message && `Details: ${details.message}`}\n\nTelefonnummer: ${details.phone}`
  }

  const response = await client.request({
    url: `${endpoint}/${event.id}`,
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      start: event.start,
      end: event.end,
      summary: `Erstgespräch mit ${details.firstName} ${details.lastName}`,
      location,
      description
    })
  })

  console.log(response)

  return true
}
