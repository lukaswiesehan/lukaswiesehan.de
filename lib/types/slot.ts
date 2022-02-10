export type Slot = {
  id: string
  timezone: string
  start: {
    dateTime: Date
    day: number
    month: number
    year: number
    hours: number
    minutes: number
  }
  end: {
    hours: number
    minutes: number
  }
  duration: number
}
