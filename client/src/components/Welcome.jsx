import React from 'react'

// Hooks Redux
import { useSelector } from 'react-redux';

// Hooks Context
import { useContext } from 'react';

// Context
import { AuthContext } from '../context/AuthContextProvider';

// Styles
import * as styles from '../style'

const Welcome = () => {
  // const { username } = useSelector(state => state.auth);
  const { state: { username } } = useContext(AuthContext);

  return (
    <article className={`${styles.container}`}>
      <h1 className={`${styles.h2}`}>Hello</h1> 
      <h2 className={`${styles.h1}`}>{ username }</h2>
    </article>
  )
}

export default Welcome
