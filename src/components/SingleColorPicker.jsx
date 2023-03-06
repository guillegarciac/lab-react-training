import React from 'react';

export default function SingleColorPicker({ color, value, onChange }) {
  return (
    <div className="color-box">
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        id={color}
        value={value}
        min="0"
        max="255"
        //we parseInt the value because it comes as a string
        onChange={(event) => onChange(parseInt(event.target.value))}
      />
    </div>
  );
}

