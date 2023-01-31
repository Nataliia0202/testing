import { fetchUsers, addNewUser, togglePosition, getToken } from './operations';
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
    positions: [],
    page: 0,
    token: null,
  },

  extraReducers: {
    [fetchUsers.pending](state) {
      handleRequest(state);
    },
    [fetchUsers.fulfilled](state, action) {
      state.items = action.payload;
      state.page +=1
      handleSuccess(state, action);
    },
    [fetchUsers.rejected](state, action) {
      handleError(state, action);
    },
    [addNewUser.pending](state) {
      handleRequest(state);
    },
    [addNewUser.fulfilled](state, action) {
      state.items.users.push(action.payload);
      state.token = action.payload.token;  
      handleSuccess(state, action);
    },
    [addNewUser.rejected](state, action) {
      handleError(state, action);
    },

    [getToken.fulfilled](state, action) {
      state.token = action.payload.token;  
    },

    [togglePosition.pending](state) {
      handleRequest(state);
    },
    [togglePosition.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.positions = action.payload;
      const index = state.positions.findIndex(
        position => position.id === action.payload.id
      );
      console.log(index)
    },
    [togglePosition.rejected](state, action) {
      handleError(state, action);
    },
  },
});


export const UsersReducer = UsersSlice.reducer;