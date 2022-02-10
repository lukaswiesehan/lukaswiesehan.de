export const getDaysOffset = (year: number, month: number): number => {
  const offset = new Date(year, month - 1, 1).getDay() - 1
  return offset == -1 ? 6 : offset
}