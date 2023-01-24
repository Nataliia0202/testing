import { configureStore } from '@reduxjs/toolkit';
import { UsersReducer } from './slice';

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});