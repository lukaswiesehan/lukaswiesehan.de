export const createICS = ({slot, details, meeting}): {event: string; error: any} => {
  const ics = require('ics')
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
        return {event: '', error: {message: 'Error creating ICS event.'}}
      } else {
        return {event, error: null}
      }
    }
  )
  return {event: '', error: null}
}
