import { useState } from "react";
import Chip from "./views/Components/Chip/Chip";
import "./App.scss";

interface User {
  name: string;
  title: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([
    { name: "Steffano", title: "guest" },
    { name: "Pastulio", title: "user" },
    { name: "Pip", title: "admin" },
  ]);

  const handleTitleChange = (userName: string, newTitle: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.name === userName ? { ...user, title: newTitle } : user
      )
    );
  };

  return (
    <div className="app">
      <h1>User Roles</h1>
      {users.map((user) => (
        <Chip
          key={user.name}
          user={user.name}
          onTitleChange={handleTitleChange}
        />
      ))}
    </div>
  );
};

export default App;
