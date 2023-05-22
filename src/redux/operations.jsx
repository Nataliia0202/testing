import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page=1, thunkAPI) => {
    try {
        const { data } = await axios.get(`/users?page=${page}&count=6`)
          
        console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };




export const togglePosition = createAsyncThunk(
  'users/togglePosition',
  async (_, thunkAPI) => {
    
    try {
      const respons = await axios.get(`/positions`);

      console.log(respons.data.positions);
      return respons.data.positions;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const getToken = createAsyncThunk(
  'token/getToken',
  async (_, thunkAPI) => {
    try {
      const respons = await axios.get('/token');
      console.log(respons.data.token);
      
      return respons.data.token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/tokin', credentials);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (user, thunkApi) => {
    try {
      const resp = await axios.post('/users', {
        headers: getToken(),
        user,
      });
      console.log(resp.data);
      // setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);