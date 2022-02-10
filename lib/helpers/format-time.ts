export const formatTime = (hours: number, minutes: number): string => {
  const string = (hours * 100 + minutes).toString()
  return `${string.substring(0, 2)}:${string.substring(2)}`
}
