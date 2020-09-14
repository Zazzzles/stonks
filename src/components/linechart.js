import React from 'react';

import {
  XYPlot,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeriesCanvas,
} from 'react-vis';

export default ({ data, staticLines = [], refContainer = null }) => {
  return (
    <div>
      <XYPlot
        width={
          refContainer.current &&
          refContainer.current.getBoundingClientRect().width
        }
        height={
          refContainer.current &&
          refContainer.current.getBoundingClientRect().height + 30
        }
      >
        {/*
         <HorizontalGridLines />
        <VerticalGridLines /> 
        */}

        <YAxis />
        <LineSeriesCanvas
          className='first-series'
          strokeWidth={4}
          curve={'curveMonotoneX'}
          data={data}
        />
        {staticLines.map((lineData) => (
          <LineSeriesCanvas
            className='first-series'
            strokeWidth={4}
            curve={'curveMonotoneX'}
            data={lineData}
          />
        ))}
      </XYPlot>
    </div>
  );
};
