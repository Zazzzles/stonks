import React from 'react';

import cn from 'classnames';

import { Container } from './index.module.css';

export default ({ className, children, reference }) => {
  return (
    <div ref={reference} className={cn(Container, className)}>
      {children}
    </div>
  );
};
