export const getMonthName = (month: number): string => {
  return new Date(2020, month - 1, 1).toLocaleString('default', {month: 'long'})
}
