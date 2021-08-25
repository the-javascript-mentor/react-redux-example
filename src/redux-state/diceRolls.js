import { createSlice } from "@reduxjs/toolkit";

export const diceRollsSlice = createSlice({
  name: "diceRolls",
  initialState: {
    rolls: [],
  },
  reducers: {
    // addRoll({roll: 4}) --> [1, 2, 4, 5] -> [1, 2, 4, 5, 4]
    addRoll: (state, action) => {
      state.rolls.push(action.roll);
    },

    // addRandomRoll() --> [1, 2, 4, 5] -> [1, 2, 4, 5, 3]
    addRandomRoll: (state) => {
      const randomRoll = Math.floor(Math.random() * 6) + 1;
      state.rolls.push(randomRoll);
    },

    // resetRolls() --> [1, 4, 5, 3, 2] -> []
    resetRolls: (state) => {
      state.rolls = [];
    },

    // keepOnlyOdds() --> [1, 3, 6, 2, 3, 6, 2] -> [1, 3, 3]
    keepOnlyOdds: (state) => {
      state.rolls = state.rolls.filter((roll) => roll % 2 !== 0);
    },
  },
});

export const { addRoll, addRandomRoll, resetRolls, keepOnlyOdds } =
  diceRollsSlice.actions;

export default diceRollsSlice.reducer;
