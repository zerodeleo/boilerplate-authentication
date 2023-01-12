import React, { createContext, useReducer, useCallback } from 'react'

import authReducer from './store/auth/reducer';
import { initialState } from './store/auth/reducer';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state = initialState, dispatch] = useReducer(authReducer);

  const thunkDispatch = useCallback(
    (action) =>
      typeof action === 'function'
        ? action(dispatch)
        : action,
    []
  );

  return (
    <AuthContext.Provider value={{ state, dispatch: thunkDispatch }}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext };
export default AuthContextProvider
