// UsersListContainer.jsx (Smart)
import React, { useEffect, useState } from "react";
import { getUsers } from "../api/usersApi";
import UsersList from "../components/UsersList";

const UsersListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return <UsersList users={users} />;
};

export default UsersListContainer;
