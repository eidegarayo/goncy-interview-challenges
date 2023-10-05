export default function filtrarPares(array: number[] | string[]): unknown[] {
  if (array.length < 1) return [];

  const filtredPares: unknown[] = [];
  const arrayObj = {};

  for (const char of array) {
    arrayObj[char] = arrayObj[char] ? arrayObj[char] + 1 : 1;
  }

  for (const char in arrayObj) {
    if (arrayObj[char] % 2 === 0) {
      filtredPares.push(char);
    }
  }

  return filtredPares;
}
