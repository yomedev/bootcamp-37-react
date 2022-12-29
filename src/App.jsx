import React, { Component } from "react"
import { Header, Layout } from './components/Layout';
import { LoginForm } from "./components/LoginForm";
import { UsersList } from './components/Users';
import { UsersFilters } from "./components/UsersFilters/UsersFilters";
import usersJson from './assets/users.json';

export class App extends Component {
state = {
  users: usersJson,
  filters: {
    isAvailable: false,
    skills: '',
    search: '',
    query: ''
  }
}

handleChangeAvailability = () => {
  this.setState(prevState => ({filters: {...prevState.filters, isAvailable: !prevState.filters.isAvailable}}))
}

handleChangeSkills = (event) => {
  const {value} = event.target
  this.setState(prevState => ({ filters: {...prevState.filters, skills: value}}))
}

handleChangeSearch = (event) => {
  const {value} = event.target
  this.setState(prevState => ({ filters: {...prevState.filters, search: value}}))
}

handleSubmitSearch = () => {
  const {search} = this.state.filters
  this.setState(prevState => ({ filters: {...prevState.filters, query: search}}))
}

handleResetSearch = () => {
  this.setState(prevState => ({ filters: {...prevState.filters, search: ''}}))
}

applyFilters = () => {
  const {users, filters} = this.state
  const {query} = filters
  const filteredUsers = users.filter(user => user.name?.toLowerCase().includes(query?.toLowerCase()))
  return filteredUsers
}

  render () {
    const {users, filters} = this.state
    const {search} = filters
console.log(search);
    return (
      <Layout>
      <Header title="Hello world!" />

      <UsersFilters 
      filters={filters} 
      onChangeSkills={this.handleChangeSkills} 
      onChangeAvailability={this.handleChangeAvailability} 
      onChangeSearch={this.handleChangeSearch}
      onResetSearch={this.handleResetSearch}
      onSubmitSearch={this.handleSubmitSearch}
      />

      <UsersList users={this.applyFilters()} />

      {/* <LoginForm /> */}
    </Layout>
  );
}
};


