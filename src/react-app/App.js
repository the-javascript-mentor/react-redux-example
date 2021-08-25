import CounterValue from "./CounterValue";
import CounterControls from "./CounterControls";
import DiceValue from "./DiceValue";
import DiceControls from "./DiceControls";

import "./App.css";

const App = () => {
  return (
    <div>
      <CounterValue />
      <CounterControls />
      <hr />
      <DiceValue />
      <DiceControls />
    </div>
  );
};

export default App;
