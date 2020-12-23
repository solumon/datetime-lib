import dayjs from "dayjs";

function formatDate(date, fmt) {
  return dayjs(date).format(fmt).toString()
}
export default {
  formatDate
}
