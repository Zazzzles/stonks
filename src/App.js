import React, { useState } from 'react'

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
import NewPosition from './components/new-position'
import useGameState from './helpers/useGameState'
import formatNum from './helpers/formatNum'

function App() {
  const [balance, setBalance] = useState(60000)
  const [purchase, setPurchase] = useState({})

  const {
    startLoop,
    stopLoop,
    setPositionOpen,
    positionOpen,
    position,
    rising,
    started,
    data,
  } = useGameState()

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
    console.log(purchase)
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
          {((props) =>
            positionOpen ? (
              <OpenPosition {...props} />
            ) : (
              <NewPosition {...props} />
            ))({
            openingValue: position.openingValue,
            profitLoss: position.profitLoss,
            currentValue: data[data.length - 1],
            rising,
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
        <button onClick={started ? stopLoop : startLoop}>Start</button>
      </div>
    </div>
  )
}

export default App
