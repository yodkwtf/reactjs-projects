import React from 'react';

const Slider = ({ min, max, value, handleChange }) => {
  return (
    <>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Slider;
