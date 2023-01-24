import { configureStore } from '@reduxjs/toolkit';
import { UsersReducer } from 'react';

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});