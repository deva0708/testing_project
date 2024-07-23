import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  return () => {
    const [count, setCount] = useState(0);

    console.log("cout", count )
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

const CounterCard1 = withCardLayout(withCounter(Counter), 'red');
const CounterCard2 = withCardLayout(withCounter(Counter), 'green');
const CounterCard3 = withCardLayout(withCounter(Counter), 'blue');

const HigherOrderComponent = () => {
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
    </div>
  );
};

export default HigherOrderComponent;