/*
  Format date to dd.mm.YYYY string
*/
export function toChartDateString (date) {
  return `${zfill(date.getDate())}.${zfill(date.getMonth() + 1)}.${date.getFullYear()}`
}

/*
  Prepend zero to numbers less than 10
*/
export function zfill (num) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}

/*
  Empty filler function
*/
export function __ () {}