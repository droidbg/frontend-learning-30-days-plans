function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function average(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Input must be an array");
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

module.exports = { add,divide, average };
