import React, { useEffect, useMemo, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUserAction, deleteUserAction, toggleNewUserModalAction } from '../../redux/users/actions.users';


import { Modal } from '../Modal/Modal';

import { AvailabilityFilters } from './components/AvailabilityFilters';
import { NewUserForm } from './components/NewUserForm';
import { SearchInput } from './components/SearchInput';
import { SkillsFilters } from './components/SkillsFilters';
import { UsersList } from './components/UsersList';

const ALL_SKILLS_VALUE = 'all';

const USERS_LS_KEY = 'users';

// const getLocalUsers = () => JSON.parse(localStorage.getItem(USERS_LS_KEY));


export const Users = () => {
  // const [users, setUsers] = useState(() => getLocalUsers() ?? usersJson);

  const { data: users, isModalOpen } = useSelector(state => state.users);

  const dispatch = useDispatch();
  
  const toggleModal = () => {
    dispatch(toggleNewUserModalAction())
  };

  const handleDeleteUser = (userId) => {
    console.log(userId);
    dispatch(deleteUserAction(userId));
  };

  const handleCreateNewUser = (user) => {
    console.log(user);
    dispatch(createNewUserAction(user));
    toggleModal()
  };
  
  const [isAvailable, setIsAvailable] = useState(false);
  const handleChangeAvailability = () => {
    setIsAvailable((prev) => !prev);
  };

  const [skills, setSkills] = useState(ALL_SKILLS_VALUE);
  const handleChangeSkills = (event) => {
    const { value } = event.target;
    setSkills(value);
  };

  const [sumbitSearch, setSumbitSearch] = useState('');
  const handleSumbitSearch = (search) => {
    setSumbitSearch(search);
  };

  useEffect(() => {
    localStorage.setItem(USERS_LS_KEY, JSON.stringify(users));
  }, [users.length]);


  const filteredUsers = useMemo(() => {
    let newUsers = users;
    if (sumbitSearch) {
      newUsers = newUsers.filter((user) =>
        user.name.toLowerCase().includes(sumbitSearch.toLowerCase()),
      );
    }

    if (isAvailable) {
      newUsers = newUsers.filter((user) => user.isOpenToWork);
    }

    if (skills !== ALL_SKILLS_VALUE) {
      newUsers = newUsers.filter((user) => user.skills.includes(skills));
    }

    return newUsers;
  }, [sumbitSearch, isAvailable, skills, users]);

  return (
    <>
      <div className='d-flex align-items-center mb-5'>
        <AvailabilityFilters value={isAvailable} onChangeAvailability={handleChangeAvailability} />

        <SkillsFilters value={skills} onChangeSkills={handleChangeSkills} />

        <button type='button' className='btn btn-primary btn-lg ms-auto' onClick={toggleModal}>
          <FiPlus />
        </button>
      </div>

      <SearchInput onSubmitSearch={handleSumbitSearch} />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onSubmit={handleCreateNewUser} onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} onUserDelete={handleDeleteUser} />
    </>
  );
};
