import React from 'react';
//React redux
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../reducers/reducer'

const Counter = () => {
  const {counterReducer:{counter}} = useSelector((state) => state)
  const dispatch = useDispatch()
  
  return (
    <React.Fragment>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </React.Fragment>
  );
};

export default Counter;