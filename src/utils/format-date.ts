export const formatDate = (timestamp: number) => {
  const [date, rawTime] = (new Date(timestamp)).toISOString().split('T')
  const [hour, minute, sec,] = rawTime.slice(0, rawTime.length - 2).split(':')
  return `${date} ${hour}:${minute}:${parseInt(sec)}`
}

export default {
  formatDate
}
