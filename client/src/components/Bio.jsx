import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
// import { editUser } from '../store/auth/actions.js';

// Context
import { AuthContext } from '../context/AuthContextProvider.jsx';
import { useContext } from 'react';
import { editUser } from '../context/store/auth/actions.js';

// Styles
import * as styles from '../style';

const Bio = () => {
  // const { uid, bio } = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  const { state: { uid, bio }, dispatch } = useContext(AuthContext);

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
