import {getEvent} from '@lib/calendar/get-event'
import {cancelEvent} from '@lib/calendar/cancel-event'
import {deleteMeeting} from '@lib/zoom/delete-meeting'
import {sendBookingCancellation} from '@lib/email/send-booking-cancellation'

export const Cancel = async (req, res) => {
  try {
    if (req.method != 'POST') throw {code: 405, message: 'Method not allowed'}
    const {id, firstName, email, zoomId} = req.body
    const event = await getEvent(id)
    await cancelEvent({event})
    if (zoomId) await deleteMeeting({id: zoomId})
    await sendBookingCancellation({email, firstName})
    res.status(200).json({success: true, error: null})
  } catch (error) {
    console.log(error)
    res.status(error.code || 500).json({success: false, error})
  }
}

export default Cancel
