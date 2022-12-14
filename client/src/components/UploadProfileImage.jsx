import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
// import { editUserImage } from '../redux/store/auth/actions.js';

// Context
import { AuthContext } from '../context/AuthContextProvider.jsx';
import { useContext } from 'react';
import { editUserImage } from '../context/store/auth/actions.js';

// Components
import Input from './layout/Input';

// Styles
import * as styles from '../style'

const UploadProfileImage = () => {
  // const { uid, image } = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  const { state: { uid, image }, dispatch } = useContext(AuthContext);
  
  const [ newImage, setNewImage ] = useState(image);
  const [ imageLoaded, setImageLoaded ] = useState(false);

  const handleChange = (e) => {
    const { files } = e.target;
    setNewImage(files[0]);
    dispatch(editUserImage({ uid, image: files[0]}));
  };

  return (
    <article className={`${styles.profileImageContainer}`}>
      <label htmlFor="dropzone-newImage" className={`${styles.profileImageLabel}`}>
        { newImage ?
        <div className={`${styles.fullCircle}`}>
          <img
            style={imageLoaded ? {} : { display: 'none' }}
            alt="profile"
            onLoad={() => setImageLoaded(true)}
            src={ newImage === image ? newImage : URL.createObjectURL(newImage) }
            className={`${styles.profileImage}`}/> 
        </div> : 
        <>
          <svg aria-hidden="true" className="mb-3 w-10 h-10 text-tetrisPurple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p className="font-patrick-hand tracking-widest mb-2"><span className="font-semibold text-tetrisPurple-500">Click to upload profile picture</span></p>
          <p className="font-patrick-hand text-center tracking-wide text-sm text-tetrisPurple-500">Without a profile picture you will <br/> not be visible to anyone</p>
        </> }
        <Input
          id="dropzone-newImage"
          type="file"
          className="hidden"
          onChange={ handleChange }
        />
      </label>
    </article>
  )
}

export default UploadProfileImage;
