import React, { useState } from "react";
import RoleDropdown from "./RoleDropdown";
import "./UserTable.scss";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Guest"| "Moderator"| "Superuser"; 
};

const initialUsers: User[] = [
  { id: "1", name: "Cindrella Selikoff", email: "cindy.selikoff@gmail.com", role: "Admin" },
  { id: "2", name: "Alice Wonderland", email: "alice@gmail.com", role: "User" },
  { id: "3", name: "Snow white", email: "snow.white@gmail.com", role: "Guest" },
  { id: "4", name: "Rapunzel Brown", email: "rapunzel.brown@gmail.com", role: "Moderator" },
  { id: "5", name: "Elsa Davis", email: "elsa.davis@gmail.com", role: "Superuser" },
];

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleRoleChange = (id: string, newRole: "Admin" | "User") => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>ID</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <RoleDropdown
                currentRole={user.role}
                onRoleChange={(newRole) => handleRoleChange(user.id, newRole)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
