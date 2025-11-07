import React, { useEffect, useState } from "react";
import UsersList from "./features/users/UsersList";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>React + Spring Boot</h1>
      <p>Message du backend : {message}</p>
		
	<UsersList />
	</div>
  );
}

export default App;
