import React from 'react';

import ReactSlider from 'react-slider';

import { Container, Track, Thumb, Slider, Amount } from './index.module.css';

export default () => {
  return (
    <div className={Container}>
      <span className={Amount}>123</span>
      <ReactSlider
        className={Slider}
        thumbClassName={Thumb}
        trackClassName={Track}
        renderThumb={(props, state) => <div {...props} />}
      />
    </div>
  );
};
