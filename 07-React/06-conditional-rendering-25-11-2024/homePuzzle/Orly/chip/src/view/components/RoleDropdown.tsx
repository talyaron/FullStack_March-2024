import React, { useState } from "react";
import "./RoleDropdown.scss";

type Role = "Admin" | "User"|"Guest"| "Moderator"| "Superuser" ;

type RoleDropdownProps = {
  currentRole: Role;
  onRoleChange: (newRole: Role) => void; // Callback for role change
};

const RoleDropdown: React.FC<RoleDropdownProps> = ({ currentRole, onRoleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const roles: Role[] = ["Admin", "User", "Guest", "Moderator", "Superuser" ]; // Extend as needed

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="role-dropdown">
      <div
        className={`role-chip ${currentRole.toLowerCase()}`}
        onClick={toggleDropdown}
      >
        {currentRole}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {roles.map((role) => (
            <div
              key={role}
              className="dropdown-item"
              onClick={() => {
                onRoleChange(role);
                setIsOpen(false);
              }}
            >
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleDropdown;
