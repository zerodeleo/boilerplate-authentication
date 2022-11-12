import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Components
import Error from '../error/Error';
import FormSignIn from './FormSignIn';

// Styles
import * as styles from '../../style'

// Thunks
import { signIn } from '../../store/auth/actions'

// Utils
import { validate } from '../../utils/regex';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { 
    uid,
    authError 
  } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (authError) setError(authError)
  },[authError]);
  
  if (uid) return <Navigate to="/" />;

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    if (value === '') return setCredentials({ ...credentials, [name]: value });
    if (/ $/.test(value)) return setError(`Space not allowed`);
    if (!validate({name, value})) return setError(`Character ${value[value.length - 1]} not allowed`);
    
    validate({ name, value }) && setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    dispatch(signIn(credentials));
  };

  return (
    <section className={`${styles.authFormContainer}`}>
      { error ? <Error className={`${styles.authError}`} msg={authError ? authError : error} /> : null }
      <FormSignIn
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </section>
  );
}

export default SignIn;
