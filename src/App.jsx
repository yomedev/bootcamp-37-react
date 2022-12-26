import React from "react"
import { Link } from "./components/Link"
import usersJson from './assets/users.json'
import { UsersList } from "./components/Users/UsersList"

export const App = () => {
  return (
    <>
      <Link href='/home' title='title'>My link App</Link>
      <br />
      <Link href='/products' title='title'>My link App2</Link>
      <UsersList users={usersJson} />
    </>
  )
 }

 // Link({href: '/home', title: 'title', children: 'My link'})