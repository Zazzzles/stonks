import React from 'react';

import {
  Container,
  PanelTopbar,
  PanelTitle,
  ContentWrapper,
  AmountTitle,
  AmountContainer,
  DetailsContainer,
} from './index.module.css';
import Panel from '../panel';
import AmountSlider from '../amount-slider';

export default () => {
  return (
    <Panel className={Container}>
      <div className={PanelTopbar}>
        <span className={PanelTitle}>New trade</span>
      </div>
      <div className={ContentWrapper}>
        <div className={AmountContainer}>
          <span className={AmountTitle}>Amount of shares</span>
          <AmountSlider />
        </div>
        <div className={DetailsContainer}></div>
      </div>
    </Panel>
  );
};
