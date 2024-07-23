import React, { useState } from 'react';
import './App.css'; 

const withCounter = (WrappedComponent) => {
  return () => {
    const [count, setCount] = useState(0);
    console.log("count",count);


    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
      setCount(prevCount => prevCount - 1);
    };

    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
};

const Counter = ({ count, increment, decrement }) => {
    // console.log("all",count, increment ,decrement)
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>Count: {count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

const withCardLayout = (WrappedComponent, backgroundColor) => {
  return () => (
    <div className="card" style={{ backgroundColor }}>
      <div className="card-body">
        <WrappedComponent />
      </div>
    </div>
  );
};

const withCharacterCounter = () => {
  return () => {
    const [charCount, setCharCount] = useState(0);
    console.log("charCount",charCount);

    const handleChange = (event) => {
      setCharCount(event.target.value.length);
      console.log("charCount1",event.target.value.length);
    };

    return (
      <div>
        <input type="text" onChange={handleChange} placeholder="Type here..." />
        <div>Characters typed: {charCount}</div>
      </div>
    );
  };
};

const withHoverCount = (WrappedComponent) => {
  return () => {
    const [hoverCount, setHoverCount] = useState(0);

    const handleHover = () => {
      setHoverCount(prevCount => prevCount + 1);
    };

    return (
      <div onMouseEnter={handleHover}>
        <div>Hover count: {hoverCount}</div>
        <WrappedComponent />
      </div>
    );
  };
};

const CounterCard1 = withCardLayout(withCounter(Counter), 'lightblue');
const CounterCard2 = withCardLayout(withCounter(Counter), 'lightgreen');
const CounterCard3 = withCardLayout(withCounter(Counter), 'lightcoral');

const CountDisplay = () => {
  const CounterWithSearch = withCharacterCounter(Counter);
  const CounterWithHover = withHoverCount(Counter);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <CounterCard1 />
        </div>
        <div className="col-md-4">
          <CounterCard2 />
        </div>
        <div className="col-md-4">
          <CounterCard3 />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <CounterWithSearch />
        </div>
        <div className="col-md-6">
          <CounterWithHover />
        </div>
      </div>
    </div>
  );
};

export default CountDisplay;