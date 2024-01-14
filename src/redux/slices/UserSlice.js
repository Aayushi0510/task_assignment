// src/redux/slices/usersSlice.js
import { createSlice, isAction } from '@reduxjs/toolkit';

let nextUserId = 1; 
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userData:[],  
    selectedUser: null,

  },
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: nextUserId++,
        ...action.payload,
      };
      return { ...state, userData: [...state.userData, newUser] };
    },
      updateUser: (state, action) => {
        const { id, updatedUser } = action.payload;
  
        // Find the index of the user with the given id
        const userIndex = state.userData.findIndex((user) => user.id === id);
  
        // If the user is found, update the user
        if (userIndex !== -1) {
          state.userData[userIndex] = { ...state.userData[userIndex], ...updatedUser };
        }
      },

    fetchUserById: (state, action) => {
      const userId = action.payload;
      state.selectedUser = state.userData.find(user => user.id === userId);
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      return {
        ...state,
        userData: state.userData.filter((user) => user.id !== userId),
      };
    },
  },
});

export const { addUser, updateUser, deleteUser, fetchUserById} = usersSlice.actions;
export default usersSlice.reducer;
