/* eslint-disable react/button-has-type */
import React from 'react';

function Button(props) {
  return (
    <button {...props}>
      { props.txt }
      { props.txtNextLine && <br/> }
      { props.txtNextLine && props.txtNextLine }
    </button>);
}

export default Button;
