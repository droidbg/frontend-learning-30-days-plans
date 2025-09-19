const { getUserById } = require("./db");

async function getUserProfile(id) {
  const user = await getUserById(id);
  return { ...user, profileComplete: true };
}
module.exports = { getUserProfile };
