export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str: string) {
  return str.split("").reverse().join("");
}

export function add(a: number, b: number) {
  return a + b;
}
export function subtract(a: number, b: number) {
  return a - b;
}
export function multiply(a: number, b: number) {
  return a * b;
}
export function divide(a: number, b: number) {
  return b === 0 ? null : a / b;
}

export function isEven(n: number) {
  return n % 2 === 0;
}
export function sumArray(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0);
}
export function maxArray(arr: number[]) {
  return Math.max(...arr);
}
export function minArray(arr: number[]) {
  return Math.min(...arr);
}
