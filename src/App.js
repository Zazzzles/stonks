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

import useGameState from './helpers/useGameState';
import formatNum from './helpers/formatNum';
import toFixed from './helpers/toFixed';

function App() {
  const [balance, setBalance] = useState(300000);
  const [purchase, setPurchase] = useState({
    amount: 0,
    purchaseValue: 0,
    openedAt: 0,
  });

  const {
    startLoop,
    // stopLoop,
    setPositionOpen,
    positionOpen,
    rising,
    //  started,
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
    setPurchase({
      amount: 0,
      purchaseValue: 0,
      openedAt: 0,
    });
    setPositionOpen(false);
  };

  return (
    <div className={Container}>
      <div className={ContentWrapper}>
        <Topbar
          balance={`$${formatNum(balance)}`}
          equity={`$${formatNum(getOpenPositionValue())}`}
        />
        <Linechart data={formatData()} staticLines={generateStaticLines()} />
        <div className={TableTrayContainer}>
          {((props) =>
            positionOpen ? (
              <OpenPosition {...props} />
            ) : (
              <NewPosition {...props} />
            ))({
            openingValue: purchase.purchaseValue,
            profitLoss:
              toFixed(purchase.amount * data[data.length - 1]) -
              purchase.purchaseValue,
            currentValue: data[data.length - 1],
            setPurchase,
            balance,
          })}
          <div className={ButtonContainer}>
            <Button
              onClick={positionOpen ? onSell : onBuy}
              primary={!positionOpen}
              secondary={positionOpen}
              label={positionOpen ? 'SELL' : 'BUY'}
            />
          </div>
          <CurrentPrice
            price={`$${formatNum(data[data.length - 1])}`}
            rising={rising}
          />
        </div>
        {/* 
         <button onClick={started ? stopLoop : startLoop}>Start</button>
        */}
      </div>
    </div>
  );
}

export default App;
