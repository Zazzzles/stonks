import React, { useEffect, useState } from 'react';

import {
  Container,
  ContentWrapper,
  TableTrayContainer,
  ButtonContainer,
} from './index.module.css';

import Button from './components/button';
import Linechart from './components/linechart';
import CurrentPrice from './components/current-price';
import OpenPosition from './components/open-position';
import NewPosition from './components/new-position';
import Topbar from './components/topbar';
import FlavorText from './components/flavor-text';
import PurchaseHistory from './components/purchase-history';

import toFixed from './helpers/toFixed';

import useGameState from './states/useGameState';
import usePurchaseState from './states/usePurchaseState';

function App() {
  const [balance, setBalance] = useState(300000);

  const {
    doSell,
    setPurchase,
    lastPurchase,
    purchase,
    purchaseHistory,
  } = usePurchaseState();

  const {
    startLoop,
    setPositionOpen,
    positionOpen,
    rising,
    currentValue,
    data,
  } = useGameState();

  useEffect(() => {
    startLoop();
  }, []);

  const generateStaticLines = () => {
    let lines = [];
    if (positionOpen) {
      lines.push(purchase.openedAt);
    }
    return lines;
  };

  const onBuy = () => {
    setBalance((prevBalance) => prevBalance - purchase.purchaseValue);
    setPositionOpen(true);
  };

  const getOpenPositionValue = () => {
    if (positionOpen) {
      const currentPrice = data[data.length - 1];
      const amount = purchase.amount;
      return toFixed(amount * currentPrice);
    }
    return 0;
  };

  const onSell = () => {
    setBalance((prevBalance) => prevBalance + getOpenPositionValue());
    setPositionOpen(false);
    doSell(currentValue);
  };

  return (
    <div className={Container}>
      <div className={ContentWrapper}>
        <Topbar balance={balance} equity={getOpenPositionValue()} />
        <Linechart data={data} staticLines={generateStaticLines()} />
        <div className={TableTrayContainer}>
          {positionOpen ? (
            <OpenPosition purchase={purchase} currentValue={currentValue} />
          ) : (
            <NewPosition
              currentValue={currentValue}
              setPurchase={setPurchase}
              balance={balance}
            />
          )}

          <div className={ButtonContainer}>
            <Button
              onClick={positionOpen ? onSell : onBuy}
              primary={!positionOpen}
              secondary={positionOpen}
              label={positionOpen ? 'SELL' : 'BUY'}
            />
            <FlavorText {...{ positionOpen, lastPurchase }} />
          </div>
          <CurrentPrice price={currentValue} rising={rising} />
        </div>
        <PurchaseHistory purchaseItems={purchaseHistory} />
      </div>
    </div>
  );
}

export default App;
