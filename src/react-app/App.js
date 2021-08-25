import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { decrement, increment } from "../redux-state/counter";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="App">The counter currently is {counter}.</div>
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

export default App;
