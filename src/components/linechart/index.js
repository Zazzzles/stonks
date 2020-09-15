import React from 'react';

import { Container } from './index.module.css';

import {
  XYPlot,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeriesCanvas,
} from 'react-vis';

export default ({ data, staticLines = [], refContainer = null }) => {
  return (
    <div className={Container}>
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

        <YAxis hideLine tickSize={4} left={15} />
        <LineSeriesCanvas
          className='first-series'
          strokeWidth={4}
          color={'#46a6f8'}
          curve={'curveMonotoneX'}
          data={data}
        />
        {staticLines.map((lineData) => (
          <LineSeriesCanvas
            className='first-series'
            strokeWidth={2}
            color={'#24fbff'}
            curve={'curveMonotoneX'}
            data={lineData}
          />
        ))}
      </XYPlot>
    </div>
  );
};
