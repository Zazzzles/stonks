import React from 'react';

import cn from 'classnames';

import {
  Container,
  PanelTopbar,
  PanelTitle,
  MetricContainer,
  MetricTitle,
  MetricValue,
  PanelContent,
  Bad,
  Good,
} from './index.module.css';

import relDiff from '../../helpers/relDiff';
import formatNum from '../../helpers/formatNum';

import Panel from '../panel';

export default ({ openingValue, profitLoss, currentValue }) => {
  const netPositive = openingValue < currentValue;
  return (
    <Panel className={Container}>
      <div className={PanelTopbar}>
        <span className={PanelTitle}>Current position</span>
      </div>
      <div className={PanelContent}>
        <div className={MetricContainer}>
          <span className={MetricValue}>${formatNum(openingValue)}</span>
          <span className={MetricTitle}>Opening value</span>
        </div>
        <div className={MetricContainer}>
          <span
            className={cn(MetricValue, {
              [Bad]: !netPositive,
              [Good]: netPositive,
            })}
          >
            ${formatNum(profitLoss)}
          </span>
          <span className={MetricTitle}>Profit/loss</span>
        </div>
        <div className={MetricContainer}>
          <span
            className={cn(MetricValue, {
              [Bad]: !netPositive,
              [Good]: netPositive,
            })}
          >
            {!netPositive && '-'} %
            {relDiff(openingValue, currentValue).toFixed(0)}
          </span>
          <span className={MetricTitle}>% change</span>
        </div>
      </div>
    </Panel>
  );
};
