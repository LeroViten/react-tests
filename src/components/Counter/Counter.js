import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getValue, getStep } from '../../redux/counter/counter-selectors';
import * as actions from '../../redux/counter/counter-actions';
import Value from './Value';
import Controls from './Controls';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <p>Hello, this is a plain dummy counter with redux state management</p>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}

// const mapStateFromProps = state => {
//   return {
//     value: state.counter.value,
//     step: state.counter.step,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrement: value => dispatch(actions.increment(value)),
//     onDecrement: value => dispatch(actions.decrement(value)),
//   };
// };

// export default connect(mapStateFromProps, mapDispatchToProps)(Counter);
