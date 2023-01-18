import React, { useMemo } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
// import { createUserAction } from '../../redux/users/actions.users';
import {
  toggleModalAction,
  deleteUserAction,
  createUserAction,
  changeSearchAction,
} from '../../redux/users/reducer.users';

import { Modal } from '../Modal/Modal';

import { AvailabilityFilters } from './components/AvailabilityFilters';
import { NewUserForm } from './components/NewUserForm';
import { SearchInput } from './components/SearchInput';
import { SkillsFilters } from './components/SkillsFilters';
import { UsersList } from './components/UsersList';

const ALL_SKILLS_VALUE = 'all';

// const getLocalUsers = () => JSON.parse(localStorage.getItem(USERS_LS_KEY));

export const Users = () => {
  // const [users, setUsers] = useState(() => getLocalUsers() ?? usersJson);

  const { data: users, isModalOpen, filters } = useSelector((state) => state.users);
  const { isAvailable, skills, search } = filters;

  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleModalAction());
  };

  const handleDeleteUser = (userId) => {
    console.log(userId);
    dispatch(deleteUserAction(userId));
  };

  const handleCreateNewUser = (user) => {
    dispatch(createUserAction(user));
  };

  const handlesearch = (search) => {
    dispatch(changeSearchAction(search));
  };

  const filteredUsers = useMemo(() => {
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
  }, [search, isAvailable, skills, users]);

  return (
    <>
      <div className='d-flex align-items-center mb-5'>
        <AvailabilityFilters />

        <SkillsFilters />

        <button type='button' className='btn btn-primary btn-lg ms-auto' onClick={toggleModal}>
          <FiPlus />
        </button>
      </div>

      <SearchInput onSubmitSearch={handlesearch} />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onSubmit={handleCreateNewUser} onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} onUserDelete={handleDeleteUser} />
    </>
  );
};
