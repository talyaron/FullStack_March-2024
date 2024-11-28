import { useState } from "react";
import Chip, { Title } from "./view/components/Chip";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Sam Selikoff", email: "sam.selikoff@gmail.com", role: Title.Admin },
    { id: 2, name: "Alice Smith", email: "alice@example.com", role: Title.User },
  ]);

  const handleRoleChange = (id: number, newRole: Title) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th style={{ width: "150px" }}>
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              {user.name}
            </td>
            <td>
              {user.email}
            </td>
            <td>
              <Chip
                title={user.role}
                onChange={(newRole) => handleRoleChange(user.id, newRole)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
