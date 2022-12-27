import React from 'react'
import { UsersItem } from './UsersItem'
import PropTypes from 'prop-types'

export const UsersList = ({users}) => {
  return (
  <ul>
    {users.map((user) => (
        <UsersItem key={user.id} name={user.name} email={user.email} phone={user.phone} />
    ))}
  </ul>
  )
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  })).isRequired
}
