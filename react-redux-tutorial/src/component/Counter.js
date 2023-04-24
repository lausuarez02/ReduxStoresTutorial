import React from 'react';

const Counter = ({ count, increment, decrement }) => {
  return (
    <React.Fragment>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </React.Fragment>
  );
};

export default Counter;