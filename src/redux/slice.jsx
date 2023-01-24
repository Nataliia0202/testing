import { fetchUsers, addNewUser } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const handleRequest = state => {
  state.isLoading = true;
};

const handleSuccess = state => {
  state.isLoading = false;
  state.error = null;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const UsersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchUsers.pending](state) {
      handleRequest(state);
    },
    [fetchUsers.fulfilled](state, action) {
      state.items = action.payload;
      handleSuccess(state, action);
    },
    [fetchUsers.rejected](state, action) {
      handleError(state, action);
    },
    [addNewUser.pending](state) {
      handleRequest(state);
    },
    [addNewUser.fulfilled](state, action) {
      state.items.push(action.payload);
      handleSuccess(state, action);
    },
    [addNewUser.rejected](state, action) {
      handleError(state, action);
    },
  },
});


export const UsersReducer = UsersSlice.reducer;