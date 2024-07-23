import { useState } from 'react';

const UseTemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('C');

  const convertTemperature = (temp, scale) => {
    if (scale === 'C') {
      return (temp * 9) / 5 + 32; 
    } else {
      return ((temp - 32) * 5) / 9; 
    }
  };

  const handleTemperatureChange = (e) => {
    const { value } = e.target;
    setTemperature(value);
  };

  const handleScaleChange = (e) => {
    const newScale = e.target.value;
    const newTemperature = convertTemperature(parseFloat(temperature), newScale);
    setTemperature(newTemperature.toFixed(2));
    setScale(newScale);
  };

  return {
    temperature,
    scale,
    handleTemperatureChange,
    handleScaleChange,
  };
};

export default UseTemperatureConverter;