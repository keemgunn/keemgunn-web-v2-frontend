export function dashToUnder(str) {
  return str.replace(/-/g, '_')
}

export function underToDash(str) {
  return str.replace(/_/g, '-')
}

export function camelToDash(str) {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
}

export function spaceToDash(str) {
  return str.replace(/ /g, '-')
}
