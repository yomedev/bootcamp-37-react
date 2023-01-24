import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = (state) => state.users.data;
export const selectIsModalOpen = (state) => state.users.isModalOpen;
export const selectUsersSearch = (state) => state.users.search;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectUsersSearch],
  (users, search) => {
    console.log('filter');
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  },
);

export const selectOpenToWorkTotal = createSelector(
  selectFilteredUsers,
  (filteredUsers) => {
    console.log('reduce');
    return filteredUsers.reduce((total, { isOpenToWork }) => (isOpenToWork ? total + 1 : total), 0)
  },
);

// export const selectFilteredUsers = (state) => {
//   console.log('filter');
//   const users = selectUsers(state);
//   const search = selectUsersSearch(state);
//   return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
// };

// export const selectOpenToWorkTotal = state => {
//   console.log('reduce');
//   const filteredUsers = selectFilteredUsers(state)
//   return filteredUsers.reduce((total, { isOpenToWork }) => (isOpenToWork ? total + 1 : total), 0)
// }
