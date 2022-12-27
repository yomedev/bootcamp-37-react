import React from "react"
import { Link } from "./components/Link/Link"
import usersJson from './assets/users.json'
import { UsersList } from "./components/Users/UsersList"
import { Button } from "./components/Button/Button"

export const App = () => {
  return (
    <>
      <Link title="title" isOnline >My link App
      <p>asdfsdf</p></Link>
      <br />
      <Link href='/contacts' title='title'>My link App2</Link>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button success>Success</Button>
      <UsersList users={usersJson} />
    </>
  )
 }

 // Link({href: '/home', title: 'title', children: 'My link'})