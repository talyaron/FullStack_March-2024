import React, { useState } from 'react';

interface ChipProps {
  currentRole: 'admin' | 'user' | 'guest' | 'moderator' | 'superuser';
  onRoleChange: (newRole: 'admin' | 'user' | 'guest' | 'moderator' | 'superuser') => void;
}

const roles = ['admin', 'user', 'guest', 'moderator', 'superuser'] as const;

const Chip: React.FC<ChipProps> = ({ currentRole, onRoleChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleRoleChange = (newRole: typeof roles[number]) => {
    onRoleChange(newRole);
    setDropdownOpen(false);
  };

  const colors: Record<typeof roles[number], string> = {
    admin: 'purple',
    user: 'green',
    guest: 'red',
    moderator: 'orange',
    superuser: 'blue',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Chip */}
      <div
        className="chip"
        style={{
          backgroundColor: colors[currentRole],
          cursor: 'pointer',
          display: 'inline-block',
          padding: '8px 12px',
          borderRadius: '16px',
          color: 'white',
          textTransform: 'capitalize',
        }}
        onClick={toggleDropdown}
      >
        {currentRole} ▼
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          className="dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '8px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            zIndex: 100,
          }}
        >
          {roles.map((role) => (
            <div
              key={role}
              className="dropdown-item"
              style={{
                padding: '8px 12px',
                cursor: 'pointer',
                color: colors[role],
                textTransform: 'capitalize',
                fontWeight: role === currentRole ? 'bold' : 'normal',
              }}
              onClick={() => handleRoleChange(role)}
            >
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chip;
