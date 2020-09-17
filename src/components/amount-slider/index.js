import React from 'react'

import ReactSlider from 'react-slider'

import { Container, Track, Thumb, Slider, Amount } from './index.module.css'

export default ({ amount, ...rest }) => {
  return (
    <div className={Container}>
      <span className={Amount}>{amount}</span>
      <ReactSlider
        max={10}
        min={1}
        value={amount}
        step={0.1}
        {...rest}
        className={Slider}
        thumbClassName={Thumb}
        trackClassName={Track}
        renderThumb={(props, state) => <div {...props} />}
      />
    </div>
  )
}
