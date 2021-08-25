import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import diceRollsReducer from "./diceRolls";

export default configureStore({
  reducer: {
    counter: counterReducer,
    diceRolls: diceRollsReducer,
  },
});
