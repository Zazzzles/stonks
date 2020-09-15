import React, { useState, useEffect, useRef } from 'react';

import {
  Container,
  ContentWrapper,
  TableContainer,
  TableTrayContainer,
  ButtonContainer,
  InfoContainer,
} from './index.module.css';

import Button from './components/button';
import Panel from './components/panel';
import Linechart from './components/linechart';
import CurrentPrice from './components/current-price';
import OpenPosition from './components/open-position';

const varianceCap = 50; // upper limit of random varaince between tick values
const refresh = 100; //  interval
const changeIntervalCap = 10; //  Upper limit of change interval size
const rollingWindowsize = 200; //  Amount of data to be displayed

function App() {
  const chartContainer = useRef();
  const [data, setData] = useState([55600]);
  const [started, setStarted] = useState(false);
  const [currentClock, setCurrentClock] = useState(null);
  const [currentValue, setCurrentValue] = useState(500);
  const [totalTicks, setTotalTicks] = useState(0);
  const [positionOpen, setPositionOpen] = useState(false);
  const [rising, setRising] = useState(false);
  const [position, setPosition] = useState({
    openingValue: 0,
    profitLoss: 0,
  });
  const [funds, setFunds] = useState(0);

  useEffect(() => {
    return () => clearInterval(currentClock);
  }, [currentClock]);

  useEffect(() => {
    console.log(data);
    setCurrentValue(data[data.length - 1]);
    setTotalTicks((ticks) => ticks + 1);
    setRising(data[data.length - 1] > data[data.length - 2]);
    if (positionOpen) {
      setPosition((pos) => {
        if (pos.openingValue === 0) {
          return {
            openingValue: currentValue,
            profitLoss: 0,
          };
        } else {
          return {
            ...pos,
            profitLoss: currentValue - pos.openingValue,
          };
        }
      });
    } else {
      setPosition({
        openingValue: 0,
        profitLoss: 0,
      });
    }
  }, [data]);

  const stopLoop = () => {
    setStarted(false);
    clearInterval(currentClock);
  };

  const startLoop = () => {
    console.log('Loop starting');
    let currentInterval = 0;
    let changeInterval = 10;
    let shouldGrow = false;
    setStarted(true);
    setCurrentClock(
      setInterval(() => {
        setData((currentData) => {
          let newData;
          let currentPoint = currentData[currentData.length - 1];
          const variance = Math.floor(Math.random() * varianceCap + 1);
          if (currentInterval >= changeInterval) {
            currentInterval = 0;
            changeInterval = Math.floor(Math.random() * changeIntervalCap + 1);
            shouldGrow = Math.floor(Math.random() * 2) === 0;
          } else {
            currentInterval += 1;
          }
          if (shouldGrow) {
            newData = [...currentData, currentPoint + variance];
          } else {
            newData = [...currentData, currentPoint - variance];
          }
          if (newData.length > rollingWindowsize + 1) {
            newData.shift(1);
          }
          return newData;
        });
      }, refresh)
    );
  };

  const formatData = () => {
    return data.map((item, index) => ({ x: index, y: item }));
  };

  const createStaticLine = (lineIndex) => {
    return data.map((item, index) => ({ x: index, y: lineIndex }));
  };

  const generateStaticLines = () => {
    let lines = [];
    if (position.openingValue !== 0) {
      lines.push(createStaticLine(position.openingValue));
    }
    return lines;
  };

  const onBuy = () => {
    setPositionOpen(true);
  };

  const onSell = () => {
    setFunds((funds) => funds + position.profitLoss);
    setPositionOpen(false);
  };

  return (
    <div className={Container}>
      <div className={ContentWrapper}>
        <Panel className={TableContainer} reference={chartContainer}>
          <Linechart
            data={formatData()}
            staticLines={generateStaticLines()}
            refContainer={chartContainer}
          />
        </Panel>
        <div className={TableTrayContainer}>
          <OpenPosition
            openingValue={position.openingValue}
            profitLoss={position.profitLoss}
            currentValue={data[data.length - 1]}
            rising={rising}
          />
          {/* <span>Current position:</span>
            <span>Opening value: {position.openingValue}</span>
            <span>Profit/loss: {position.profitLoss}</span>
            <span>Total ticks: {totalTicks}</span>
            <strong>Available fiunds: {funds}</strong> */}
          <CurrentPrice price={data[data.length - 1]} rising={rising} />
          <div className={ButtonContainer}>
            <Button onClick={onBuy} primary label={'BUY'} />
            <Button onClick={onSell} label={'SELL'} />
          </div>
        </div>
        <button onClick={started ? stopLoop : startLoop}>Start</button>
      </div>
    </div>
  );
}

export default App;
