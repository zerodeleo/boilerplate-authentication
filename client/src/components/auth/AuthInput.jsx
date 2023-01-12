import React from 'react'

// Components
import Input from '../layout/Input';

// Styles
import * as styles from '../../style'

const AuthInput = ({ credentials, handleChange, name, type, label }) => {
  return (
    <div className="py-5">
      <div className="relative group">
        {!credentials[name] && <label className={`${styles.authInputLabel}`}>{label}</label>}
        {credentials[name] && <label className={`${styles.authInputLabelSmall}`}>{label}</label>}
        <Input
          required
          className={`${styles.authInput}`}
          onChange={handleChange}
          type={type}
          name={name}
          value={credentials[name]}
        />
      </div>
    </div>
  )
}

export default AuthInput
