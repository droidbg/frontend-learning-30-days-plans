// Mocking Date (time-sensitive logic)

function isOfficeOpen() {
    const hour = new Date().getHours();
    return hour >= 9 && hour < 17; // 9am - 5pm
  }
  module.exports = { isOfficeOpen };
  