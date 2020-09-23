import React from 'react'

import {
  Container,
  PlaceholderContainer,
  Topbar,
  PurchaseItem,
  ProfitLoss,
  Negative,
  PurchaseItemsWrapper,
} from './index.module.css'

import cn from 'classnames'

import Panel from '../panel'
import toFixed from '../../helpers/toFixed'
import formatNum from '../../helpers/formatNum'

export default ({ purchaseItems }) => {
  if (purchaseItems.length === 0)
    return <div className={PlaceholderContainer}>Trade history empty</div>
  return (
    <div className={Container}>
      <div className={Topbar}>
        <span>Shares</span>
        <span>Opening value</span>
        <span>closing value</span>
        <span>Profit/loss</span>
      </div>
      <div className={PurchaseItemsWrapper}>
        {purchaseItems.map(
          ({ amount, openedAt, closedAt, purchaseValue, positive }) => {
            return (
              <Panel className={PurchaseItem} key={openedAt}>
                <span>{amount}</span>
                <span>${formatNum(toFixed(purchaseValue))}</span>
                <span>${formatNum(toFixed(closedAt))}</span>
                <span className={cn(ProfitLoss, { [Negative]: !positive })}>
                  ${formatNum(toFixed(closedAt - purchaseValue))}
                </span>
              </Panel>
            )
          }
        )}
      </div>
    </div>
  )
}
