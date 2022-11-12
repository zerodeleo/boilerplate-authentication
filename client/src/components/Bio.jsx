import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Dispatches
import { editUser } from '../store/auth/actions.js';

// Styles
import * as styles from '../style';

const Bio = () => {
  const { uid, bio } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [newBio, setNewBio] = useState(bio);

  useEffect(() => {
    dispatch(editUser({ uid, bio: newBio }));
  }, [uid, newBio, dispatch]);

  return (
    <article className={`${styles.bioContainer}`}>
      <textarea
        onChange={(e) => setNewBio(e.target.value)}
        value={ newBio }
        className={`z-50 ${styles.bio}`}/>
      <div className={`absolute ${styles.bio}`}>{ !newBio && 'Pssst... write your bio here' }</div>
    </article>
  )
}

export default Bio
