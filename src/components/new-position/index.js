import React, { useState } from 'react'

import {
  Container,
  PanelTopbar,
  PanelTitle,
  ContentWrapper,
  AmountTitle,
  AmountContainer,
  DetailsContainer,
  Valset,
  Label,
  Value,
} from './index.module.css'
import Panel from '../panel'
import AmountSlider from '../amount-slider'

export default () => {
  const [amount, setAmount] = useState(0.5)
  return (
    <Panel className={Container}>
      <div className={PanelTopbar}>
        <span className={PanelTitle}>New trade</span>
      </div>
      <div className={ContentWrapper}>
        <div className={AmountContainer}>
          <span className={AmountTitle}>Amount of shares</span>
          <AmountSlider amount={amount} onChange={setAmount} />
        </div>
        <div className={DetailsContainer}>
          <div className={Valset}>
            <span className={Label}>Cost</span>
            <span className={Value}>$500</span>
          </div>
          <div className={Valset}>
            <span className={Label}>Remaining balance</span>
            <span className={Value}>$5000</span>
          </div>
        </div>
      </div>
    </Panel>
  )
}
