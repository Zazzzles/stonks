import React from 'react';

import { Container, TextContainer, Value, Label } from './index.module.css';

export default ({ balance, equity }) => {
  return (
    <div className={Container}>
      <div className={TextContainer}>
        <span className={Label}>Available balance</span>
        <span className={Value}>{balance}</span>
      </div>
      <div className={TextContainer}>
        <span className={Label}>Equity</span>
        <span className={Value}>{equity}</span>
      </div>
    </div>
  );
};
