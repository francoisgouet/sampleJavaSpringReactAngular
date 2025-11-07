// api/usersApi.js
export async function getUsers() {
  const res = await fetch("http://localhost:8080/api/users");
  if (!res.ok) throw new Error("Erreur API");
  return res.json();
}
