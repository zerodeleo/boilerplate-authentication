/* eslint-disable react/button-has-type */
import React from 'react';

function Button(props) {
  return <button {...props}>{ props.txt }</button>;
}

export default Button;
