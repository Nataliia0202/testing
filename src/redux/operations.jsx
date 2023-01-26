import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page = 1, thunkAPI) => {
    try {
        const { data } = await axios.get(`/users?page=${page}&count=6`)
          
        console.log(data);
      return data;
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
  async (_, thunkAPI) => {
    
    try {
      const { data } = await axios.get(`/positions/`);

      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);