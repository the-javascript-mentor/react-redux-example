import { useSelector } from "react-redux";

const DiceValue = () => {
  const diceRolls = useSelector((state) => state.diceRolls.rolls);

  if (diceRolls.length === 0) {
    return <p>No dice rolls.</p>;
  } else {
    return <p>Dice rolls: {diceRolls.join(", ")}.</p>;
  }
};

export default DiceValue;
