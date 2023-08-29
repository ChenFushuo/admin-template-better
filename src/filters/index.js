/**
 * @author Chen Fushuo < 2023-8-21 >
 * @description 全局过滤器
 */

const dayjs = require('dayjs')

// YYYY年MM月DD日
export function defaultFormat(value) {
  if (!value) return ''
  return dayjs(value).format('YYYY年MM月DD日')
}
// YYYY-MM-DD
export function dateFormat(value) {
  if (!value) return ''
  return dayjs(value).format('YYYY-MM-DD')
}
// YYYY-MM-DD hh:mm:ss
export function precisionFormat(value) {
  if (!value) return ''
  return dayjs(value).format('YYYY-MM-DD hh:mm:ss')
}
