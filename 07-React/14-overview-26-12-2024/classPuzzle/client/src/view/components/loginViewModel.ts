import { useState } from 'react';
import { loginUser } from '../../controllers/db/users/setUser';

export const LoginViewModel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      const user = await loginUser(username, password);
      console.log('Logged in user:', user);
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return { username, password, setUsername, setPassword, handleSubmit, error };
};
