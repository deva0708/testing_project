import React, { useState, useEffect, useRef } from 'react';

const Useref = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const intervalRef = useRef(null);

  useEffect(() => {
    // Function to update the time every second
    const updateCurrentTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
      console.log('current time',)
    };

    // Set up the interval to call updateCurrentTime every second
    intervalRef.current = setInterval(updateCurrentTime, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{currentTime}</p>
    </div>
  );
};

export default Useref;