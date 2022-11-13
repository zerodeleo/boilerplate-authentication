import React from 'react'

// Redux
import { useSelector } from 'react-redux';

// Styles
import * as styles from '../style'

const Welcome = () => {
  const { username } = useSelector(state => state.auth);

  return (
    <article className={`${styles.container}`}>
      <h1 className={`${styles.h2}`}>Hello</h1> 
      <h2 className={`${styles.h1}`}>{ username }</h2>
    </article>
  )
}

export default Welcome
