export function createCounter({ id, date, name = '', documentId }) {
  return {
    id,
    date,
    name,
    documentId,
  }
}

// export function increment(counter) {
//   return createCounter(counter + 1)
// }

// export function decrement(counter) {
//   return createCounter(counter - 1)
// }
