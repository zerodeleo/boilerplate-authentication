import React from 'react';

import * as styles from '../../style'

const Error = ({ msg, className }) => (
  <section className={`${styles.error}`}>
    <div className='flex flex-col justify-center h-full'>
      <p className='font-patrick-hand'>
        This is a message from the developer...
      </p>
      <p>
        {msg}
      </p>
    </div>
  </section>
);

export default Error;
