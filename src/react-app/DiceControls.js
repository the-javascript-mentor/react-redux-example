import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addRoll,
  addRandomRoll,
  resetRolls,
  keepOnlyOdds,
} from "../redux-state/diceRolls";

const DiceControls = () => {
  const [diceRollInputValue, setDiceRollInputValue] = useState(1);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        min="1"
        max="6"
        value={diceRollInputValue}
        onChange={(event) => {
          setDiceRollInputValue(Number(event.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(addRoll(diceRollInputValue));
        }}
      >
        Add roll
      </button>
      <button
        onClick={() => {
          dispatch(addRandomRoll());
        }}
      >
        Add random roll
      </button>
      <button
        onClick={() => {
          dispatch(resetRolls());
        }}
      >
        Reset rolls
      </button>
      <button
        onClick={() => {
          dispatch(keepOnlyOdds());
        }}
      >
        Keep only odd rolls
      </button>
    </div>
  );
};

export default DiceControls;
