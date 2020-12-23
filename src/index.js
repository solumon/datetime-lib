
import dayjs from "dayjs";

function formatDate(date, fmt) {
  return dayjs(date).format(fmt).toString()
}

/**
 * 将字符串解析成日期
 * @param str 输入的日期字符串，如'2014-09-13'
 * @param fmt 字符串格式，默认'YYYY-MM-DD'，支持如下：Y、M、D、H、m、s、S，不支持w和q
 * @returns 解析后的Date类型日期
 */
function parseDate (str, fmt) {
  if (!fmt) {
    fmt = "YYYY-MM-DD"
  }
  return dayjs(str, fmt).toDate()
}
/*
* 时间字符串格式转换
*
* @param dateStr 输入的时间字符串
* @param toFmt   需要转换的格式
* @param fromFmt 输入时间字符串的格式 默认 "YYYY-MM-DD"
* */
function transFormatDate(dateStr, toFmt, fromFmt = "YYYY-MM-DD") {
  return formatDate(parseDate(dateStr, fromFmt), toFmt)
}

function weekOfDate (date) {
  let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return weeks[dayjs(date).day()]
}

function isSameDay (date, other) {
  return dayjs(date).isSame(dayjs(other), 'year') && dayjs(date).isSame(dayjs(other), 'month') && dayjs(date).isSame(dayjs(other), 'day')
}

function isAfter (date, other) {
  return dayjs(date).isAfter(dayjs(other))
}
/**
 * 获取日期后的几天后对应的日期
 * @param date 输入日期
 * @param days 天数
 * @returns 对应几天后的日期
 */
function afterDay (date, days) {
  return dayjs(date).add(days, 'day').toDate()
}

export default {
  formatDate,
  parseDate,
  transFormatDate,
  weekOfDate,
  isSameDay,
  isAfter,
  afterDay
}
