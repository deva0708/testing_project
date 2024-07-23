import React from 'react';
import useTemperatureConverter from './UseTemperatureConverter';

const TemperatureConverter = () => {
  const { temperature, scale, handleTemperatureChange, handleScaleChange } = useTemperatureConverter();

  return (
    <div>
      <h1>Temperature Converter</h1>
      <input
        type="number"
        value={temperature}
        onChange={handleTemperatureChange}
      />
      <select value={scale} onChange={handleScaleChange}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
      <p>
        {temperature} {scale === 'C' ? 'Celsius' : 'Fahrenheit'}
      </p>
    </div>
  );
};

export default TemperatureConverter;