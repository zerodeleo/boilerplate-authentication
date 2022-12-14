import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
// import { signUp } from '../../redux/store/auth/actions';

// Context
import { AuthContext } from '../../context/AuthContextProvider';
import { useContext } from 'react';
import { signUp } from '../../context/store/auth/actions';

// Components
import Error from '../error/Error';
import FormSignUp from './FormSignUp';

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
  // const dispatch = useDispatch();
  // const { uid, authError } = useSelector((state) => state.auth);

  const { state: { authError, uid }, dispatch } = useContext(AuthContext);

  useEffect(() => {
    if (authError) setError(authError)
  },[authError]);
  
  if (uid) return <Navigate to="/" />;

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    if (value === '') return setCredentials({ ...credentials, [name]: value });
    if (/ $/.test(value)) return setError(`Space not allowed`);
    if (!validate({name, value})) return setError(`Character "${value[value.length - 1]}" not allowed in ${name}`);
    
    validate({ name, value }) && setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (credentials.password !== credentials.passwordRepeat) return setError("Passwords don't match");
    dispatch(signUp(credentials));
  };

  return (
    <section className={`${styles.authFormContainer}`}>
      <FormSignUp 
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      { error && <Error className={styles.authError} msg={authError ? authError : error} /> }
    </section>
  );
};

export default SignUp;
