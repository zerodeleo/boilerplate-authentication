import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
// import { editUser } from '../redux/store/auth/actions.js';

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

  const handleChange = (e) => {
    const { value } = e.target;
    setNewBio(value);
    uid && dispatch(editUser({ uid, bio: value }));
  };

  return (
    <article className={`${styles.bioContainer}`}>
      <textarea
        onChange={handleChange}
        value={ newBio }
        className={`z-50 ${styles.bio}`}/>
      <p className={`${styles.bio} absolute left-0 w-full text-center`}>{ !newBio && 'Pssst... write your bio here' }</p>
    </article>
  )
};

export default Bio;
