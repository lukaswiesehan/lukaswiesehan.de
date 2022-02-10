export const getMonthName = (year: number, month: number): string => {
  return new Date(year, month - 1, 1).toLocaleString('default', {month: 'long'})
}