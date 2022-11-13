import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './initialState';
import * as actions from './actions'

const user = ({state, action: { payload: { data: { uid, username, bio, image } } }}) => {
  return {
  ...state,
  uid: uid ? uid : state.uid,
  username: username ? username : state.username,
  bio: bio ? bio : state.bio,
  image: image ? image : state.image,
  authSuccess: true,
  authLoading: false,
  authError: false,
}};

const loading = ({ state, action }) => {
  return {
  ...state,
  authSuccess: false,
  authLoading: false,
  authError: false,
}};

const err = ({ state, action }) => {
  return {
  ...state,
  authSuccess: false,
  authLoading: false,
  authError: action.payload,
}};

const extraReducers = (builder) => {
  builder
    .addCase(actions.signIn.pending, (state, action) => loading({state, action}))
    .addCase(actions.signIn.fulfilled, (state, action) => user({state, action}))
    .addCase(actions.signIn.rejected, (state, action) => err({state, action}))

    .addCase(actions.signUp.pending, (state, action) => loading({state, action}))
    .addCase(actions.signUp.fulfilled, (state, action) => user({state, action}))
    .addCase(actions.signUp.rejected, (state, action) => err({state, action}))

    .addCase(actions.editUser.pending, (state, action) => loading({state, action}))
    .addCase(actions.editUser.fulfilled, (state, action) => user({state, action}))
    .addCase(actions.editUser.rejected, (state, action) => err({state, action}))

    .addCase(actions.editUserImage.pending, (state, action) => loading({state, action}))
    .addCase(actions.editUserImage.fulfilled, (state, action) => user({state, action}))
    .addCase(actions.editUserImage.rejected, (state, action) => err({state, action}))

    .addCase(actions.deleteUser.pending, (state, action) => loading({state, action}))
    .addCase(actions.deleteUser.fulfilled, (state, action) => user({state, action}))
    .addCase(actions.deleteUser.rejected, (state, action) => err({state, action}))

    .addCase(actions.logoutUser.pending, () => ( {...initialState, authLoading: true } ))
    .addCase(actions.logoutUser.fulfilled, () => ({ ...initialState }))
    .addCase(actions.logoutUser.rejected, () => ({ ...initialState, authError: true }));
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers,
});

export default authSlice.reducer;
