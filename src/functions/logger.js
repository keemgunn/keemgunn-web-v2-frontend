export function logg(...message) {
  if (process.env.NODE_ENV === 'development') {
    console.log(...message);
  }
}