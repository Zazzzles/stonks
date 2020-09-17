import React from 'react';

import {
  Container,
  Label,
  Value,
  GrowIcon,
  LabelContainer,
} from './index.module.css';

import upArrow from '../../static/icons/arrow_up.png';
import downArrow from '../../static/icons/arrow_down.png';
import formatNum from '../../helpers/formatNum';

const Arrow = ({ rising }) => {
  return (
    <img
      className={GrowIcon}
      src={rising ? upArrow : downArrow}
      alt={rising ? 'rising' : 'falling'}
    />
  );
};

export default ({ price = 0, rising = false }) => {
  return (
    <div className={Container}>
      <div className={LabelContainer}>
        <span className={Label}>Current price</span>
        <Arrow rising={rising} />
      </div>

      <span className={Value}>${formatNum(price)}</span>
    </div>
  );
};
