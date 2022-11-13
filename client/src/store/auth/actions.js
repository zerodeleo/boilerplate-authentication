import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const file = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return formData;
}

const service = async (method, url, arg, thunkAPI) => {
  try {
    return await axios[method](url, arg ? arg : undefined)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
}

export const signIn = createAsyncThunk(
  'signIn',
  async ({ username, password }, thunkAPI) => {
    return service('post', '/api/authenticate/signin', { username, password }, thunkAPI);
  }
);

export const signUp = createAsyncThunk(
  'signUp',
  async ({ username, password }, thunkAPI) => {
    return service('post', '/api/authenticate/signup', { username, password }, thunkAPI);
  }
);

export const editUser = createAsyncThunk(
  'editUser',
  async ({ uid, username, password, bio }, thunkAPI) => {
    return service('put', `/api/users/${uid}`, { username, password, bio }, thunkAPI);
  }
);

export const editUserImage = createAsyncThunk(
  'editUserImage',
  async ({ uid, image }, thunkAPI) => {
    return service('put', `/api/users/${uid}/image`, file(image), thunkAPI);
  }
);

export const deleteUser = createAsyncThunk(
  'deleteUser',
  async ({ uid }, thunkAPI) => {
    return service('delete', `/api/users/${uid}`, null, thunkAPI);
  }
);

export const logoutUser = createAsyncThunk(
  'logoutUser',
  async () => {
    localStorage.clear();
  }
);
