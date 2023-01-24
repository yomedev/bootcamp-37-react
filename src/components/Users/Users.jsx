import React, {useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers, selectIsModalOpen, selectOpenToWorkTotal } from '../../redux/users/selectors.users';
import {
  toggleModalAction,
  deleteUserAction,
  createUserAction,
} from '../../redux/users/slice.users';

import { Modal } from '../Modal/Modal';

import { NewUserForm } from './components/NewUserForm';
import { SearchInput } from './components/SearchInput';
import { UsersList } from './components/UsersList';

export const Users = () => {
  const filteredUsers = useSelector(selectFilteredUsers)
  const openToWorkTotal = useSelector(selectOpenToWorkTotal)
  const isModalOpen = useSelector(selectIsModalOpen);

  const [counter, setCounter] = useState(0);

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

  return (
    <>
      <button type='button' className='btn btn-primary btn-lg ms-auto mb-5' onClick={toggleModal}>
        <FiPlus />
      </button>

      <button type='button' className='btn btn-primary mb-3' onClick={() => setCounter((prev) => prev + 1)}>
        {counter}
      </button>

      <SearchInput />

      <p>Open to work: {openToWorkTotal}</p>

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onSubmit={handleCreateNewUser} onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} onUserDelete={handleDeleteUser} />
    </>
  );
};
