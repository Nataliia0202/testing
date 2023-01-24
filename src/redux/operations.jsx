import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const fetchUsers = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users?page=1&count=6');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (
    {
      id,
      name,
      email,
      phone,
      position,
      position_id,
      registration_timestamp,
      photo,
    },
    thunkApi
  ) => {
    try {
      const users = await axios.post('/users', {
        id,
        name,
        email,
        phone,
        position,
        position_id,
        registration_timestamp,
        photo,
      });

      return users.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


export const togglePosition = createAsyncThunk(
  'users/togglePosition',
  async ({ positions }, thunkAPI) => {
    try {
      const response = await axios.put(`/positions/${positions.id}`, {
        position: !positions.id,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);