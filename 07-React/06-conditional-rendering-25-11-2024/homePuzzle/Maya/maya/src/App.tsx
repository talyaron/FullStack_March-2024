import { useState } from 'react'
import './App.css'
import Chip from './view/components/chip/Chip';



interface Role {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'guest' | 'moderator' | 'superuser'; 
}

const App: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: 'Sam Selikoff', role: 'admin' },
    { id: 2, name: 'Alice Smith', role: 'user' },
  ]);

  const handleRoleChange = (id: number, newRole: Role['role']) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, role: newRole } : role
      )
    );
  };

  return (
    <div style={{ padding: '16px' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(({ id, name, role }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{id}</td>
              <td>
                <Chip
                  currentRole={role}
                  onRoleChange={(newRole) => handleRoleChange(id, newRole)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;