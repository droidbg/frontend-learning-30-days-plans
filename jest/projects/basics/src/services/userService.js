// Used for Test of Mocking an API Call

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  }
  module.exports = { fetchUsers };
  