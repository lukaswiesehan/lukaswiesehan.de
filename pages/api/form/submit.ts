import {getEvent} from '@lib/calendar/get-event'
import {updateEvent} from '@lib/calendar/update-event'
import {sendBookingConfirmation} from '@lib/email/send-booking-confirmation'
import {createMeeting} from '@lib/zoom/create-meeting'

export const Slots = async (req, res) => {
  try {
    if (req.method != 'POST') throw {code: 405, message: 'Method not allowed'}
    const {slot, details} = req.body

    let meeting = null
    const event = await getEvent(slot.id)

    if (details.setting == 'zoom') {
      meeting = await createMeeting({slot, details})
    }

    const eventUpdated = await updateEvent({event, details, meeting})

    const confirmationSent = await sendBookingConfirmation({slot, details, meeting})

    res.status(200).json({event})
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
}

export default Slots
