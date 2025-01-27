import { User } from '../../../model/models/userModel';
import { useGetUsersQuery } from '../../../services/user';

const UsersList = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <h1>Users List</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
        {data?.results.map((user: User) => (
          <div key={user.email} style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} style={{ width: '300px', height: '300px' }}/>
            <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
