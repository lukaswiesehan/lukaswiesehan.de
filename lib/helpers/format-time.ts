export const formatTime = (hours: number, minutes: number): string => {
  const string = (10000 + hours * 100 + minutes).toString()
  return `${string.substring(1, 3)}:${string.substring(3, 5)}`
}
