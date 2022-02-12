import {createICS} from '@lib/calendar/create-ics'
import {getMonthName} from '@lib/helpers/get-month-name'

export const sendBookingConfirmation = async ({slot, details, meeting}) => {
  const {error, event} = createICS({slot, details, meeting})
  if (error) throw error

  const attachment = {
    content: Buffer.from(event).toString('base64'),
    filename: `erstgespraech-${details.firstName.toLowerCase()}-lukas.ics`,
    type: 'text/html',
    disposition: 'attachment'
  }

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'content-type': 'application/json'
    },
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
            cancelLink: `https://lukaswiesehan.de/contact/cancel-meeting?id=${slot.id}&firstName=${details.firstName}&email=${details.email}`
          }
        }
      ],
      from: {email: 'mail@lukaswiesehan.de', name: 'Lukas Wiesehan'},
      reply_to: {email: 'mail@lukaswiesehan.de', name: 'Lukas Wiesehan'},
      template_id: 'd-5b6f9abd0840417ca81a010228e49970',
      attachments: [attachment]
    })
  })
  if (response.status != 202) throw {message: 'Error sending confirmation email.'}
  return true
}
