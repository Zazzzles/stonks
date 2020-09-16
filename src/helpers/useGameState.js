import { useState, useEffect } from 'react'
import config from '../consts/config'

export default () => {
  const [data, setData] = useState([config.startingValue])
  const [currentValue, setCurrentValue] = useState(config.startingValue)

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
    let changeInterval = config.changeIntervalCap
    let shouldGrow = false
    setStarted(true)
    setCurrentClock(
      setInterval(() => {
        setData((currentData) => {
          let newData
          let currentPoint = currentData[currentData.length - 1]
          const variance = Math.floor(Math.random() * config.varianceCap + 1)
          if (currentInterval >= changeInterval) {
            currentInterval = 0
            changeInterval = Math.floor(
              Math.random() * config.changeIntervalCap + 1
            )
            shouldGrow = Math.floor(Math.random() * 2) === 0
          } else {
            currentInterval += 1
          }
          if (shouldGrow) {
            newData = [...currentData, currentPoint + variance]
          } else {
            newData = [...currentData, currentPoint - variance]
          }
          if (newData.length > config.rollingWindowSize + 1) {
            newData.shift(1)
          }
          return newData
        })
      }, config.refreshInterval)
    )
  }

  return {
    startLoop,
    stopLoop,
    setPositionOpen,
    positionOpen,
    position,
    rising,
    started,
    data,
  }
}
