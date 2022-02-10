import {getSlots} from '@lib/calendar/get-slots'

export const Slots = async (req, res) => {
  try {
    const slots = await getSlots()
    res.status(200).json({slots})
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
}

export default Slots
