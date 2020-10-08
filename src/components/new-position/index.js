import React, { useEffect, useState } from 'react';

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
  CostValue,
} from './index.module.css';
import Panel from '../panel';
import AmountSlider from '../amount-slider';
import formatNum from '../../helpers/formatNum';
import toFixed from '../../helpers/toFixed';

export default ({ currentValue, setPurchase, balance }) => {
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setPurchase({
      amount,
      purchaseValue: toFixed(currentValue * amount),
      openedAt: currentValue,
    });
  }, [amount, currentValue, setPurchase]);
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
            <span className={CostValue}>
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
  );
};
