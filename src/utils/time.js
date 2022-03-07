import dayjs from "dayjs"
export default function time(time,type='all'){
  return dayjs(time).format(type === 'all'?'YYYY-MM-DD HH:mm:ss':type)
}