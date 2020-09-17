import React from 'react'

import { Container, Value } from './index.module.css'

export default ({ balance }) => {
  return (
    <div>
      <span className={Value}>{balance}</span>
    </div>
  )
}
