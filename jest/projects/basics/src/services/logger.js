// Mocking console.log (or other globals)

function logMessage(message) {
    console.log("LOG:", message);
  }
  module.exports = { logMessage };
  