import React from 'react';
import cn from 'classnames';

import { Container, Primary, Secondary } from './index.module.css';

export default ({ label, onClick, primary, secondary }) => {
  return (
    <button
      onClick={onClick}
      className={cn(Container, { [Primary]: primary, [Secondary]: secondary })}
    >
      {label}
    </button>
  );
};
