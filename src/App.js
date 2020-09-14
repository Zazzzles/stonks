import React, { useState, useEffect } from 'react';

import Linechart from './components/linechart';

const varianceCap = 50; // upper limit of random varaince between tick values
const refresh = 100; //  interval
const changeIntervalCap = 10; //  Upper limit of change interval size
const rollingWindowsize = 200; //  Amount of data to be displayed

function App() {
  const [data, setData] = useState([500]);
  const [started, setStarted] = useState(false);
  const [currentClock, setCurrentClock] = useState(null);
  const [currentValue, setCurrentValue] = useState(500);
  const [totalTicks, setTotalTicks] = useState(0);
  const [positionOpen, setPositionOpen] = useState(false);
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
    <div>
      <Linechart data={formatData()} staticLines={generateStaticLines()} />
      <button onClick={started ? stopLoop : startLoop}>Start</button>
      <button onClick={onBuy}>Buy</button>
      <button onClick={onSell}>Sell</button>
      <p>Current value: {currentValue}</p>
      <p>Total ticks: {totalTicks}</p>
      {positionOpen && (
        <>
          <p>Current position:</p>
          <p>Opening value: {position.openingValue}</p>
          <p>Profit/loss: {position.profitLoss}</p>
        </>
      )}
      <strong>Available fiunds: {funds}</strong>
    </div>
  );
}

export default App;
