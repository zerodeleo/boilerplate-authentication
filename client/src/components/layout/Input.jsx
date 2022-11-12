import React from 'react';

function Input(props) {
  return (
    <>
      <input
        autoComplete="off"
        {...props}
        values={null}
      />
      { props.list && props.values
        ? (
          <datalist id={props.list}>
            { props.values.map((value) => <option label={value} key={value} value={value} />) }
          </datalist>
        )
        : null }
    </>
  );
}

export default Input;
