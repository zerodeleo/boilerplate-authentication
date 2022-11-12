import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Components
import Error from '../error/Error';
import FormSignUp from './FormSignUp';

// Dispatches
import { signUp } from '../../store/auth/actions';

// Styles
import * as styles from '../../style'

// Utils
import { validate } from '../../utils/regex';

function SignUp() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    passwordRepeat: ''
  });
  const [error, setError] = useState('');
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
    credentials.password === credentials.passwordRepeat && dispatch(signUp(credentials));
  };

  return (
    <section className={`${styles.authFormContainer}`}>
      { error ? <Error className={styles.authError} msg={authError ? authError : error} /> : null }
      <FormSignUp 
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </section>
  );
}

export default SignUp;
