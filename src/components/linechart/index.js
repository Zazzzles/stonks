import React, { useEffect, useRef } from 'react';

import { Container } from './index.module.css';

import Panel from '../panel';

import { XYPlot, YAxis, LineSeriesCanvas } from 'react-vis';

export default ({ data, staticLines = [] }) => {
  const chartContainer = useRef();

  const createStaticLine = (lineIndex) => {
    return data.map((_, index) => ({ x: index, y: lineIndex }));
  };

  const generateStaticLines = () => {
    return staticLines.map(createStaticLine);
  };

  const formatData = () => {
    return data.map((item, index) => ({ x: index, y: item }));
  };

  return (
    <Panel className={Container} ref={chartContainer}>
      {chartContainer.current && (
        <XYPlot
          width={chartContainer.current.getBoundingClientRect().width}
          height={chartContainer.current.getBoundingClientRect().height + 25}
        >
          <YAxis hideLine tickSize={4} left={15} />
          <LineSeriesCanvas
            className='first-series'
            strokeWidth={4}
            color={'#46a6f8'}
            curve={'curveMonotoneX'}
            data={formatData()}
          />
          {generateStaticLines().map((lineData, index) => (
            <LineSeriesCanvas
              key={index}
              className='first-series'
              strokeWidth={2}
              color={'#24fbff'}
              curve={'curveMonotoneX'}
              data={lineData}
            />
          ))}
        </XYPlot>
      )}
    </Panel>
  );
};
