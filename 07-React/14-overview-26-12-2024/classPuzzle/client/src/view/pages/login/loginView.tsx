import React from 'react';
import { LoginViewModel } from '../../components/loginViewModel';

const LoginView: React.FC<{ viewModel: LoginViewModel }> = ({ viewModel }) => {
  const { username, password, setUsername, setPassword, handleSubmit, error } = viewModel;

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginView;


