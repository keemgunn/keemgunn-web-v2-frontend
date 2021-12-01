export function typeCheck(payload, expect, source) {
  const type = typeof payload;
  if (type === 'undefined') {
    console.error(`!error! @${source} typeof ${payload} is undefined`);
    // return new expect
    return null
  } else if (type === typeof expect) {
    return payload
  } else {
    console.warn(`!warning! @${source} typeof ${payload} is not match`);
    return payload
  }
}