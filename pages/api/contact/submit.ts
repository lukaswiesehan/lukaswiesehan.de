import {getEvent} from '@lib/calendar/get-event'
import {createEvent} from '@lib/calendar/create-event'
import {updateEvent} from '@lib/calendar/update-event'
import {sendBookingConfirmation} from '@lib/email/send-booking-confirmation'
import {createMeeting} from '@lib/zoom/create-meeting'

export const Submit = async (req, res) => {
  try {
    if (req.method != 'POST') throw {code: 405, message: 'Method not allowed'}
    const {slot, details} = req.body
    let meeting = null
    const event = await getEvent(slot.id)
    if (details.setting == 'zoom') meeting = await createMeeting({slot, details})
    await updateEvent({event, details, meeting})
    await createEvent({event, details, meeting})
    await sendBookingConfirmation({slot, details, meeting})
    res.status(200).json({success: true, error: null})
  } catch (error) {
    console.log(error)
    res.status(error.code || 500).json({success: false, error})
  }
}

export default Submit
