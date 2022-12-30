
import { UsersItem } from './UsersItem';

export const UsersList = ({users, onUserDelete}) => {
  return (
    <div className="mb-5">
      {users.map(user => (
        <UsersItem onUserDelete={onUserDelete} key={user.id} user={user} />
      ))}
    </div>
  );
};
