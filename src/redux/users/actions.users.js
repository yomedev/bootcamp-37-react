import { CREATE_NEW_USER, DELETE_USER, TOGGLE_NEW_USER_MODAL } from "./types.users";

export const toggleNewUserModalAction = () => ({ type: TOGGLE_NEW_USER_MODAL });

export const deleteUserAction = (userId) => ({ type: DELETE_USER, payload: userId })

export const createNewUserAction = (user) => ({ type: CREATE_NEW_USER, payload: { ...user, id: Date.now() } })