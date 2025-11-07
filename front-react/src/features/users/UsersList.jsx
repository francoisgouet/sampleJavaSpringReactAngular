import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/usersApi";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        console.log("Réponse API :", data); // 👈 debug
        setUsers(data);
      })
      .catch((err) => console.error("Erreur fetch :", err));
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
