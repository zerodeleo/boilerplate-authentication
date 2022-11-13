import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Hooks Redux
import { useDispatch, useSelector } from 'react-redux';

// Hooks Context
import { useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContextProvider';

// Components
import Error from '../error/Error';
import FormSignIn from './FormSignIn';

// Styles
import * as styles from '../../style'

// Thunks Redux
// import { signIn } from '../../store/auth/actions'

// Thunks Context
import { signIn } from '../../context/store/auth/actions'

// Utils
import { validate } from '../../utils/regex';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(false);

  // Redux
  // const { uid, authError } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // Context
  const { state: { authError, uid }, dispatch } = useContext(AuthContext);

  console.log(authError);
  
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
    dispatch(signIn(credentials));
  };

  return (
    <section className={`${styles.authFormContainer}`}>
      <FormSignIn
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
        { error ? <Error className={`${styles.authError}`} msg={authError ? authError : error} /> : null }
    </section>
  );
}

export default SignIn;
