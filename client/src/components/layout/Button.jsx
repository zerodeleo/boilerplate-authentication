/* eslint-disable react/button-has-type */
import React from 'react';

function Button(props) {
  return (
    <button {...props}>
      { props.txt }
      { props.txtnextline && <br/> }
      { props.txtnextline && props.txtnextline }
    </button>);
}

export default Button;
