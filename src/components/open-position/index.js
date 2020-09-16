import React from 'react'

import {
  Container,
  PanelTopbar,
  PanelTitle,
  MetricContainer,
  MetricTitle,
  MetricValue,
  PanelContent,
  PlaceholderContainer,
  PlaceholderText,
} from './index.module.css'

import relDiff from '../../helpers/relDiff'

import Panel from '../panel'

export default ({
  openingValue,
  profitLoss,
  currentValue,
  rising,
  positionOpen,
}) => {
  if (!positionOpen)
    return (
      <Panel className={PlaceholderContainer}>
        <span className={PlaceholderText}>No position open</span>
      </Panel>
    )
  return (
    <Panel className={Container}>
      <div className={PanelTopbar}>
        <span className={PanelTitle}>Current Position</span>
      </div>
      <div className={PanelContent}>
        <div className={MetricContainer}>
          <span className={MetricValue}>${openingValue}</span>
          <span className={MetricTitle}>Opening value</span>
        </div>
        <div className={MetricContainer}>
          <span className={MetricValue}>${profitLoss}</span>
          <span className={MetricTitle}>Profit/loss</span>
        </div>
        <div className={MetricContainer}>
          <span className={MetricValue}>
            {!rising && '-'} %{relDiff(openingValue, currentValue).toFixed(0)}
          </span>
          <span className={MetricTitle}>% change</span>
        </div>
      </div>
    </Panel>
  )
}
