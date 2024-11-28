import React from "react";
import "./App.css"; // Optional if you have global styles
import UserTable from "./view/components/UserTable"; // Import the UserTable component

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Roles Management</h1>
      </header>
      <main>
        <UserTable /> {/* Render the table with dropdowns */}
      </main>
    </div>
  );
};

export default App;
