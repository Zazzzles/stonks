import React, { useEffect, useState } from 'react';

import cn from 'classnames';

import { Container, Text, Animating } from './index.module.css';
import config from '../../consts/config';

export default ({ positionOpen, lastPurchase }) => {
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!positionOpen) {
      getMessage();
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }
  }, [positionOpen]);

  useEffect(() => {
    if (!positionOpen) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 600);
    }
  }, [positionOpen]);

  const getMessage = () => {
    const positive = lastPurchase.purchaseValue < lastPurchase.closedAt;
    const length = positive
      ? config.comments.good.length
      : config.comments.bad.length;
    const commentIndex = Math.floor(Math.random() * length);
    const selectedMessage = positive
      ? config.comments.good
      : config.comments.bad;
    setMessage(selectedMessage[commentIndex]);
  };

  return (
    <div className={cn(Container)}>
      {visible && (
        <span className={cn(Text, { [Animating]: animating })}>{message}</span>
      )}
    </div>
  );
};
