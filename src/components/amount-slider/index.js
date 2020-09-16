import React from 'react'

import ReactSlider from 'react-slider'

import { Container, Track, Thumb, Slider, Amount } from './index.module.css'

export default ({ amount, onChange }) => {
  return (
    <div className={Container}>
      <span className={Amount}>{amount}</span>
      <ReactSlider
        max={1}
        min={0}
        value={amount}
        step={0.1}
        onChange={onChange}
        className={Slider}
        thumbClassName={Thumb}
        trackClassName={Track}
        renderThumb={(props, state) => <div {...props} />}
      />
    </div>
  )
}
