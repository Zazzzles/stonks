import React from 'react'

import {
  Container,
  ContentWrapper,
  TableTrayContainer,
  ButtonContainer,
} from './index.module.css'

import Button from './components/button'
import Linechart from './components/linechart'
import CurrentPrice from './components/current-price'
import OpenPosition from './components/open-position'

import useGameState from './helpers/useGameState'

const VARIANCE_CAP = 50 // upper limit of random varaince between tick values
const REFRESH_INTERVAL = 100 //  interval
const CHANGE_INTERVAL_CAP = 10 //  Upper limit of change interval size
const ROLLING_WINDOW_SIZE = 200 //  Amount of data to be displayed
const STARTING_VALUE = 55600 //  Starting value of stock

function App() {
  const {
    startLoop,
    stopLoop,
    setPositionOpen,
    positionOpen,
    position,
    rising,
    started,
    data,
  } = useGameState({
    varianceCap: VARIANCE_CAP,
    refreshInterval: REFRESH_INTERVAL,
    changeIntervalCap: CHANGE_INTERVAL_CAP,
    rollingWindowSize: ROLLING_WINDOW_SIZE,
    startingValue: STARTING_VALUE,
  })

  const formatData = () => {
    return data.map((item, index) => ({ x: index, y: item }))
  }

  const createStaticLine = (lineIndex) => {
    return data.map((_, index) => ({ x: index, y: lineIndex }))
  }

  const generateStaticLines = () => {
    let lines = []
    if (position.openingValue !== 0) {
      lines.push(createStaticLine(position.openingValue))
    }
    return lines
  }

  const onBuy = () => {
    setPositionOpen(true)
  }

  const onSell = () => {
    setPositionOpen(false)
  }

  return (
    <div className={Container}>
      <div className={ContentWrapper}>
        <Linechart data={formatData()} staticLines={generateStaticLines()} />
        <div className={TableTrayContainer}>
          <OpenPosition
            positionOpen={positionOpen}
            openingValue={position.openingValue}
            profitLoss={position.profitLoss}
            currentValue={data[data.length - 1]}
            rising={rising}
          />
          <CurrentPrice price={data[data.length - 1]} rising={rising} />
          <div className={ButtonContainer}>
            <Button onClick={onBuy} primary label={'BUY'} />
            <Button onClick={onSell} label={'SELL'} />
          </div>
        </div>
        <button onClick={started ? stopLoop : startLoop}>Start</button>
      </div>
    </div>
  )
}

export default App
