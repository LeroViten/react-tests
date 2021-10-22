import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import Value from './Value';
import Controls from './Controls';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="counter">
      <p>Hello, this is a plain dummy counter with redux state management</p>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateFromProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateFromProps, mapDispatchToProps)(Counter);
