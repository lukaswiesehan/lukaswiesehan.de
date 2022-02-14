export const sendBookingCancellation = async ({email, firstName}) => {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    body: JSON.stringify({
      personalizations: [
        {
          to: [{email: email}],
          bcc: [{email: 'mail@lukaswiesehan.de'}],
          dynamic_template_data: {
            firstName: firstName
          }
        }
      ],
      from: {email: 'mail@lukaswiesehan.de', name: 'Lukas Wiesehan'},
      reply_to: {email: 'mail@lukaswiesehan.de', name: 'Lukas Wiesehan'},
      template_id: 'd-f4f251949cad4c18b4e4b2880f61255c'
    }),
    headers: {
      authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'content-type': 'application/json'
    },
    method: 'POST'
  })

  if (response.status != 202) throw {message: 'Error sending cancellation email.'}
  return true
}
