function capitalize(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
  }

  function isEmail(str) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  }
  
  function truncate(str, maxLength) {
    if (typeof str !== "string") throw new Error("Input must be a string");
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }
  module.exports = { capitalize, isEmail, truncate };
  