// export default function esIsograma(string: string): boolean {
//   if (typeof string !== "string") return false;

//   if (string.length <= 1) return true;

//   const stringDic = {};

//   for (const char of string.toLowerCase()) {
//     stringDic[char] = stringDic[char] ? stringDic[char] + 1 : 1;
//   }

//   if (Math.max(...Object.values(stringDic)) > 1) return false;

//   return true;
// }

export default function esIsograma(string: string): boolean {
  const draft = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z]/g, "");

  return new Set([...draft]).size === string.length;
}
