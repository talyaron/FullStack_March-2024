import React from 'react';
import { useGetRandomUserQuery } from './slices/Apislice';

function App() {
  const { data, error, isLoading } = useGetRandomUserQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const user = data?.results[0]; // The API returns a 'results' array with user data

  return (
    <div>
      <h1>Random User</h1>
      {user ? (
        <div>
          <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <h2>{user.name.first} {user.name.last}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default App;

