import { useDispatch } from "react-redux";

import { decrement, increment } from "../redux-state/counter";

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default CounterControls;
