import React from 'react';
import cn from 'classnames';

import { Container, Primary } from './index.module.css';

export default ({ label, onClick, primary }) => {
  return (
    <button onClick={onClick} className={cn(Container, { [Primary]: primary })}>
      {label}
    </button>
  );
};
