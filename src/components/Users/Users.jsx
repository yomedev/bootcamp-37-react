import { Component } from 'react';

import { FiPlus } from 'react-icons/fi';

import usersJson from '../../assets/users.json';
import { ConfettiContainer } from '../Confetti/Confetti';
import { Modal } from '../Modal/Modal';

import { AvailabilityFilters } from './components/AvailabilityFilters';
import { NewUserForm } from './components/NewUserForm';
import { SearchInput } from './components/SearchInput';
import { SkillsFilters } from './components/SkillsFilters';
import { UsersList } from './components/UsersList';

const ALL_SKILLS_VALUE = 'all';

const USERS_LS_KEY = 'users';

export class Users extends Component {
  state = {
    users: usersJson,
    isModalOpen: false,
    isAvailable: false,
    skills: ALL_SKILLS_VALUE,
    search: '',
  };

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem(USERS_LS_KEY));
    if (localData && localData.length) {
      this.setState({ users: localData });
    }
  }

  getSnapshotBeforeUpdate() {
    const windowHeight = window.innerHeight
    return windowHeight
  }

  componentDidUpdate(_, prevState, snapshot) {
    // window.scrollTo({top: snapshot, behavior: 'smooth'})
    console.log(snapshot);
    if (this.state.users !== prevState.users) {
      localStorage.setItem(USERS_LS_KEY, JSON.stringify(this.state.users));
    }
  }

  handleChangeSkills = (event) => {
    const { value } = event.target;
    this.setState({ skills: value });
  };

  handleChangeAvailability = () => {
    this.setState((prevState) => ({ isAvailable: !prevState.isAvailable }));
  };

  handleChangeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleResetSearch = () => {
    this.setState({ search: '' });
  };

  handleDeleteUser = (userId) => {
    this.setState((prevState) => {
      return { users: prevState.users.filter((user) => user.id !== userId) };
    });
  };

  handleCreateNewUser = (user) => {
    this.setState((prevState) => ({
      users: [{ ...user, id: Date.now() }, ...prevState.users],
      isModalOpen: false,
    }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  apllyFilters = () => {
    const { users, search, skills, isAvailable } = this.state;

    let newUsers = users;

    if (search) {
      newUsers = newUsers.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (isAvailable) {
      newUsers = newUsers.filter((user) => user.isOpenToWork);
    }

    if (skills !== ALL_SKILLS_VALUE) {
      newUsers = newUsers.filter((user) => user.skills.includes(skills));
    }

    return newUsers;
  };

  render() {
    const { isAvailable, skills, search, isModalOpen } = this.state;

    return (
      <>
        <div className='d-flex align-items-center mb-5'>
          <AvailabilityFilters
            value={isAvailable}
            onChangeAvailability={this.handleChangeAvailability}
          />

          <SkillsFilters value={skills} onChangeSkills={this.handleChangeSkills} />

          <button
            type='button'
            className='btn btn-primary btn-lg ms-auto'
            onClick={this.toggleModal}
          >
            <FiPlus />
          </button>
        </div>

        <SearchInput
          value={search}
          onResetSearch={this.handleResetSearch}
          onChangeSearch={this.handleChangeSearch}
        />

        {isModalOpen && (
          <Modal onModalClose={this.toggleModal}>
            <NewUserForm onSubmit={this.handleCreateNewUser} onModalClose={this.toggleModal} />
          </Modal>
        )}

        <UsersList users={this.apllyFilters()} onUserDelete={this.handleDeleteUser} />

        <ConfettiContainer />
      </>
    );
  }
}
