import React from 'react';

// Components
import Input from './Input';
import Button from './Button';

const FormSignUp = ({ credentials, handleChange, handleSubmit }) => {
  return (
    <form className="form--signup" onSubmit={handleSubmit}>
      <Input
        className="form__input--signup"
        onChange={handleChange}
        type="text"
        name="username"
        value={credentials.username}
        placeholder="Username ..."
      />
      <Input
        className="form__input--signup"
        onChange={handleChange}
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Password ..."
      />
      <Button
        className="form__btn--signup"
        onSubmit={handleSubmit}
        txt="sign up"
        type="submit"
      />
  </form>
  )
}

export default FormSignUp;
