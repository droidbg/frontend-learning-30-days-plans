async function getUserById(id) {
    // Imagine this hits a database
    return { id, name: "Real User" };
  }
  module.exports = { getUserById };
  