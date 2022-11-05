import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const API_URL = '/api/users/';

const service = async (method, url, arg, thunkAPI) => {
  try {
    return await axios[method](`${API_URL}${url}`, arg ? arg : undefined)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
}

export const signIn = createAsyncThunk(
  'signIn',
  async ({ username, password }, thunkAPI) => {
    return service('post', 'signin', { username, password }, thunkAPI);
  }
);

export const signUp = createAsyncThunk(
  'signUp',
  async ({ username, password }, thunkAPI) => {
    return service('post', 'signup', { username, password }, thunkAPI);
  }
);

export const editUser = createAsyncThunk(
  'editUser',
  async ({ uid, username, password }, thunkAPI) => {
    return service('put', uid, { username, password }, thunkAPI);
  }
);

export const deleteUser = createAsyncThunk(
  'deleteUser',
  async ({ uid }, thunkAPI) => {
    return service('delete', `${uid}`, null, thunkAPI);

  }
);

export const logoutUser = createAsyncThunk(
  'logoutUser',
  async () => {
    localStorage.clear();
  }
);
