import {getMonthName} from '@lib/helpers/get-month-name'

export const sendBookingConfirmation = async ({slot, details, meeting}) => {
  // console.log(slot)
  // console.log(details)
  // console.log(meeting)

  //return false

  const ics = require('ics')
  let attachment = null
  ics.createEvent(
    {
      start: [slot.start.year, slot.start.month, slot.start.day, slot.start.hours, slot.start.minutes],
      duration: {hours: 0, minutes: slot.duration},
      title: `Erstgespräch ${details.firstName} & Lukas`,
      description: `Wir sprechen über Dein Unternehmen, Deine Werte & Ziele und natürlich über Dein Produkt, um das es geht. In einer Analyse stellen wir gemeinsam grobe Anforderungen fest und ich zeige Dir auf, wie Deine Next-Level Produktwebsite aussehen könnte.${
        details.setting == 'zoom' ? `\nZoom-Link: ${meeting.join_url}` : ''
      }${details.setting == 'phone' ? `\nIch rufe Dich zur vereinbarten Zeit an.` : ''}`,
      location: `${details.setting == 'zoom' ? 'Zoom-Meeting' : ''}${details.setting == 'phone' ? 'Telefongespräch' : ''}`
    },
    (error, event) => {
      if (error) {
        return {error: {message: 'Error creating ICS event.'}}
      } else {
        attachment = {
          content: Buffer.from(event).toString('base64'),
          filename: `erstgespraech-${details.firstName.toLowerCase()}-lukas.ics`,
          type: 'text/html',
          disposition: 'attachment'
        }
      }
    }
  )

  const response = fetch('https://api.sendgrid.com/v3/mail/send', {
    body: JSON.stringify({
      personalizations: [
        {
          to: [{email: details.email}],
          bcc: [{email: 'mail@lukaswiesehan.de'}],
          dynamic_template_data: {
            firstName: details.firstName,
            date: `${slot.start.day}. ${getMonthName(slot.start.month)} ${slot.start.year}`,
            time: `${slot.start.hours}:${slot.start.minutes} - ${slot.end.hours}:${slot.end.minutes}`,
            setting: `${details.setting == 'zoom' ? 'Zoom-Meeting' : ''}${details.setting == 'phone' ? 'Telefongespräch' : ''}`,
            phone: details.phone || null,
            meetingId: meeting.id || null,
            password: meeting.password || null,
            meetingLink: meeting.join_url || null,
            industry: details.industry,
            message: details.message,
            cancelLink: `https://lukaswiesehan.de/api/meeting/cancel?id=${slot.id}`
          }
        }
      ],
      from: {email: 'mail@lukaswiesehan.de', name: 'Lukas Wiesehan'},
      reply_to: {email: 'mail@lukaswiesehan.de', name: 'Lukas Wiesehan'},
      template_id: 'd-5b6f9abd0840417ca81a010228e49970',
      attachments: [attachment]
    }),
    headers: {
      authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'content-type': 'application/json'
    },
    method: 'POST'
  })

  console.log(response)
}
