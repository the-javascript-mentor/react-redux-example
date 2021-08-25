import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((state) => state.counter.value);

  return <p>The counter currently is {counter}.</p>;
};

export default CounterValue;
