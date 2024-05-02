import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_USERS } from "./initialUsers";
import { UsersState } from "./types";

const initialState: UsersState = {
  userList: INITIAL_USERS,
  selectedUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser(state, action) {
      const newUser = action.payload;
      const nextId =
        state.userList.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;

      state.userList.push({ ...newUser, id: nextId });
    },

    editUser(state, action) {
      const { userId, ...updatedUserInfo } = action.payload;
      const userIndex = state.userList.findIndex((user) => user.id === userId);

      if (userIndex !== -1) {
        state.userList[userIndex] = {
          ...state.userList[userIndex],
          ...updatedUserInfo,
        };
      }
    },

    selectUser(state, action) {
      const userId = action.payload;
      const isSelected = state.selectedUsers.includes(userId);

      if (isSelected) {
        state.selectedUsers = state.selectedUsers.filter((id) => id !== userId);
      } else {
        state.selectedUsers.push(userId);
      }
    },

    deleteUsers(state, action) {
      const idsToRemove = action.payload;
      state.userList = state.userList.filter(
        (user) => !idsToRemove.includes(user.id)
      );
      state.selectedUsers = state.selectedUsers.filter(
        (id) => !idsToRemove.includes(id)
      );
    },
  },
});

export const selectUsers = (state: { users: UsersState }) =>
  state.users.userList;

export const selectUserById =
  (userId: number) => (state: { users: UsersState }) =>
    state.users.userList.find((user) => user.id === userId);

export const selectEmails = (state: { users: UsersState }) =>
  state.users.userList.map((user) => user.email);

export const selectSelectedUsers = (state: { users: UsersState }) =>
  state.users.selectedUsers;

export const selectSelectedUsersFullNames = (state: { users: UsersState }) =>
  state.users.userList
    .filter((user) => state.users.selectedUsers.includes(user.id))
    .map((user) => `${user.lastName} ${user.secondName} ${user.firstName}`);

export const { addNewUser, editUser, selectUser, deleteUsers } =
  usersSlice.actions;
export default usersSlice.reducer;
