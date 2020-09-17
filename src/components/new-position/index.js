import React, { useEffect, useState } from 'react'

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
import formatNum from '../../helpers/formatNum'

export default ({ currentValue, setPurchase, balance }) => {
  const [amount, setAmount] = useState(0.5)
  const updatePurchase = () => {
    setPurchase({
      amount,
      currentValue,
      purchaseValue: parseInt((amount * currentValue).toFixed(0)),
    })
  }
  useEffect(() => {
    updatePurchase()
  }, [])
  return (
    <Panel className={Container}>
      <div className={PanelTopbar}>
        <span className={PanelTitle}>New trade</span>
      </div>
      <div className={ContentWrapper}>
        <div className={AmountContainer}>
          <span className={AmountTitle}>Amount of shares</span>
          <AmountSlider
            amount={amount}
            onChange={setAmount}
            afterChange={() => {
              setPurchase({
                amount,
                currentValue,
                purchaseValue: parseInt((amount * currentValue).toFixed(0)),
              })
            }}
          />
        </div>
        <div className={DetailsContainer}>
          <div className={Valset}>
            <span className={Label}>Cost</span>
            <span className={Value}>
              ${formatNum((amount * currentValue).toFixed(0))}
            </span>
          </div>
          <div className={Valset}>
            <span className={Label}>Remaining balance</span>
            <span className={Value}>
              ${formatNum(balance - (amount * currentValue).toFixed(0))}
            </span>
          </div>
        </div>
      </div>
    </Panel>
  )
}
