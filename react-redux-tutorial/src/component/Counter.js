import React from 'react';
//React redux
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../reducers/actions'

const Counter = () => {
  const {count} = useSelector((state) => state)
  const dispatch = useDispatch()
  
  return (
    <React.Fragment>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </React.Fragment>
  );
};

export default Counter;