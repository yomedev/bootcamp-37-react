import React from 'react'
import { UsersItem } from './UsersItem'

export const UsersList = ({users}) => {
  return (
  <ul>
    {users.map((user) => (
        <UsersItem key={user.id} name={user.name} email={user.email} phone={user.phone} />
    ))}
  </ul>
  )
}
