import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
  const [rValue, setRValue] = useState(100);
  const [gValue, setGValue] = useState(85);
  const [bValue, setBValue] = useState(255);

  function handleRChange(newValue) {
    setRValue(newValue);
  }

  function handleGChange(newValue) {
    setGValue(newValue);
  }

  function handleBChange(newValue) {
    setBValue(newValue);
  }

  const color = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div className="color-container">
      <div>
        <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
        <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
        <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />
      </div>
      <div className="component" style={{
          backgroundColor: color,
          height: '100px',
          width: '100px',
        }}>
      </div>
    </div>
  );
}
