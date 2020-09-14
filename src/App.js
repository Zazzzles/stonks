import React, { useState, useEffect } from 'react'

import Linechart from './components/linechart'

const varianceCap = 50 // upper limit of random varaince between tick values
const refresh = 50 //  interval
const changeIntervalCap = 10 //  Upper limit of change interval size
const rollingWindowsize = 200 //  Amount of data to be displayed

function App() {
  const [data, setData] = useState([500])
  const [currentClock, setCurrentClock] = useState(null)

  useEffect(() => {
    return () => clearInterval(currentClock)
  }, [currentClock])

  useEffect(() => {
    console.log(data)
  }, [data])

  const startLoop = () => {
    console.log('Loop starting')
    let currentInterval = 0
    let changeInterval = 10
    let shouldGrow = false
    setCurrentClock(
      setInterval(() => {
        setData((currentData) => {
          let newData
          let currentPoint = currentData[currentData.length - 1]
          const variance = Math.floor(Math.random() * varianceCap + 1)
          if (currentInterval >= changeInterval) {
            currentInterval = 0
            changeInterval = Math.floor(Math.random() * changeIntervalCap + 1)
            shouldGrow = Math.floor(Math.random() * 2) === 0
          } else {
            currentInterval += 1
          }
          if (shouldGrow) {
            newData = [...currentData, currentPoint + variance]
          } else {
            newData = [...currentData, currentPoint - variance]
          }
          if (newData.length > rollingWindowsize + 1) {
            newData.shift(1)
          }
          return newData
        })
      }, refresh)
    )
  }

  const formatData = (data) => {
    return data.map((item, index) => ({ x: index, y: item }))
  }

  return (
    <div>
      <Linechart data={formatData(data)} />
      <button onClick={startLoop}>Start</button>
    </div>
  )
}

export default App
