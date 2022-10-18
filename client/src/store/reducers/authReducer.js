import * as types from '../types';

import { authInitState } from '../initState';

const authReducer = (state = authInitState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        uid: action.payload.uid,
        username: action.payload.username,
        authError: null,
      };
    case types.SIGNIN_USER_ERROR:
      return {
        ...state,
        authError: action.err,
      };
    case types.SIGNUP_USER_SUCCESS:
      return { ...state, username: action.payload.username, uid: action.payload.uid, authError: null };
    case types.SIGNUP_USER_ERROR:
      return { ...state, authError: action.err };
    case types.EDIT_USER_SUCCESS:
      return { ...state, username: action.payload.username, authError: null };
    case types.EDIT_USER_ERROR:
      return { ...state, authError: action.err };
    case types.DELETE_USER_SUCCESS:
      return authInitState;
    case types.DELETE_USER_ERROR:
      return { ...state, authError: action.err };
    case types.LOGOUT_USER_SUCCESS:
      return authInitState;
    default:
      return state;
  }
};

export default authReducer;
