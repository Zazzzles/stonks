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

import useGameState from './helpers/useGameState';
import toFixed from './helpers/toFixed';

function App() {
  const [balance, setBalance] = useState(300000);
  const [lastPurchase, setLastPurchase] = useState({
    amount: 0,
    purchaseValue: 0,
    openedAt: 0,
    closedAt: 0,
  });
  const [purchase, setPurchase] = useState({
    amount: 0,
    purchaseValue: 0,
    openedAt: 0,
  });

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

  const formatData = () => {
    return data.map((item, index) => ({ x: index, y: item }));
  };

  const createStaticLine = (lineIndex) => {
    return data.map((_, index) => ({ x: index, y: lineIndex }));
  };

  const generateStaticLines = () => {
    let lines = [];
    if (positionOpen) {
      lines.push(createStaticLine(purchase.openedAt));
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
    setLastPurchase({
      ...purchase,
      closedAt: currentValue * purchase.amount,
    });
    setPurchase({
      amount: 0,
      purchaseValue: 0,
      openedAt: 0,
    });
  };

  return (
    <div className={Container}>
      <div className={ContentWrapper}>
        <Topbar balance={balance} equity={getOpenPositionValue()} />
        <Linechart data={formatData()} staticLines={generateStaticLines()} />
        <div className={TableTrayContainer}>
          {positionOpen ? (
            <OpenPosition
              openingValue={purchase.purchaseValue}
              profitLoss={
                toFixed(purchase.amount * currentValue) - purchase.purchaseValue
              }
              currentValue={currentValue}
            />
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
      </div>
    </div>
  );
}

export default App;
