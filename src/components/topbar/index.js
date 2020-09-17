import React from 'react';

import { Container, TextContainer, Value, Label } from './index.module.css';

import formatNum from '../../helpers/formatNum';

export default ({ balance, equity }) => {
  return (
    <div className={Container}>
      <div className={TextContainer}>
        <span className={Label}>Available balance</span>
        <span className={Value}>${formatNum(balance)}</span>
      </div>
      <div className={TextContainer}>
        <span className={Label}>Equity</span>
        <span className={Value}>${formatNum(equity)}</span>
      </div>
    </div>
  );
};
