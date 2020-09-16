import React, { useState, useEffect } from 'react'

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

const VARIANCE_CAP = 50 // upper limit of random varaince between tick values
const REFRESH_INTERVAL = 100 //  interval
const CHANGE_INTERVAL_CAP = 10 //  Upper limit of change interval size
const ROLLING_WINDOW_SIZE = 200 //  Amount of data to be displayed
const STARTING_VALUE = 55600 //  Starting value of stock

function App() {
  const [data, setData] = useState([STARTING_VALUE])
  const [currentValue, setCurrentValue] = useState(STARTING_VALUE)
  const [funds, setFunds] = useState(0)

  const [started, setStarted] = useState(false)
  const [currentClock, setCurrentClock] = useState(null)
  const [positionOpen, setPositionOpen] = useState(false)
  const [rising, setRising] = useState(false)
  const [position, setPosition] = useState({
    openingValue: 0,
    profitLoss: 0,
  })

  useEffect(() => {
    return () => clearInterval(currentClock)
  }, [currentClock])

  useEffect(() => {
    // console.log(data)
    setCurrentValue(data[data.length - 1])
    setRising(data[data.length - 1] > data[data.length - 2])
    if (positionOpen) {
      setPosition((pos) => {
        if (pos.openingValue === 0) {
          return {
            openingValue: currentValue,
            profitLoss: 0,
          }
        } else {
          return {
            ...pos,
            profitLoss: currentValue - pos.openingValue,
          }
        }
      })
    } else {
      setPosition({
        openingValue: 0,
        profitLoss: 0,
      })
    }
  }, [data])

  const stopLoop = () => {
    setStarted(false)
    clearInterval(currentClock)
  }

  const startLoop = () => {
    let currentInterval = 0
    let changeInterval = CHANGE_INTERVAL_CAP
    let shouldGrow = false
    setStarted(true)
    setCurrentClock(
      setInterval(() => {
        setData((currentData) => {
          let newData
          let currentPoint = currentData[currentData.length - 1]
          const variance = Math.floor(Math.random() * VARIANCE_CAP + 1)
          if (currentInterval >= changeInterval) {
            currentInterval = 0
            changeInterval = Math.floor(Math.random() * CHANGE_INTERVAL_CAP + 1)
            shouldGrow = Math.floor(Math.random() * 2) === 0
          } else {
            currentInterval += 1
          }
          if (shouldGrow) {
            newData = [...currentData, currentPoint + variance]
          } else {
            newData = [...currentData, currentPoint - variance]
          }
          if (newData.length > ROLLING_WINDOW_SIZE + 1) {
            newData.shift(1)
          }
          return newData
        })
      }, REFRESH_INTERVAL)
    )
  }

  const formatData = () => {
    return data.map((item, index) => ({ x: index, y: item }))
  }

  const createStaticLine = (lineIndex) => {
    return data.map((item, index) => ({ x: index, y: lineIndex }))
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
    setFunds((funds) => funds + position.profitLoss)
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
