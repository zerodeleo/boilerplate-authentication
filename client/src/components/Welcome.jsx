import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux';
// import { editUser } from '../redux/store/auth/actions';

// Context
import { AuthContext } from '../context/AuthContextProvider';
import { useContext } from 'react';
import { editUser } from '../context/store/auth/actions';

// Components
import Input from './layout/Input';

// Styles
import * as styles from '../style'

const Welcome = () => {
  // const { uid, username, authError } = useSelector(state => state.auth);
  const { state: { uid, username, authError }, dispatch } = useContext(AuthContext);

  const [newUsername, setNewUsername] = useState(username);
  const [error, setError] = useState(authError);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewUsername(value);
    value && dispatch(editUser({ uid, username: value }));
  };

  return (
    <article className={`${styles.container}`}>
      <h1 className={`${styles.h2}`}>Hello</h1> 
      <Input
        className={`${styles.h1} ${styles.input}`}
        value={newUsername}
        onChange={handleChange}/>
    </article>
  )
};

export default Welcome
