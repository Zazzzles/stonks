import React, { forwardRef } from 'react'

import cn from 'classnames'

import { Container } from './index.module.css'

export default forwardRef(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn(Container, className)}>
      {children}
    </div>
  )
})
