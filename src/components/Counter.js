// src/components/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
  return {
    count: state.counter, // Assuming you have a 'counter' reducer
  };
};

// Map action creators to component props
const mapDispatchToProps = {
  increment,
  decrement,
};

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
