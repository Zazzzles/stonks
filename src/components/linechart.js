import React from 'react'

import {
  XYPlot,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeriesCanvas,
} from 'react-vis'

export default ({ data }) => {
  return (
    <div>
      <XYPlot width={1800} height={600}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <YAxis />
        <LineSeriesCanvas
          className='first-series'
          strokeWidth={4}
          curve={'curveMonotoneX'}
          data={data}
        />
      </XYPlot>
    </div>
  )
}
