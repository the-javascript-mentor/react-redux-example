import { useSelector } from "react-redux";

const DiceValue = () => {
  const diceRolls = useSelector((state) => state.diceRolls.rolls);
  const diceRollCounter = useSelector((state) => state.diceRolls.rollCounter);

  if (diceRolls.length === 0) {
    return <p>No dice rolls. The dice was rolled {diceRollCounter} times.</p>;
  } else {
    return (
      <p>
        Dice rolls: {diceRolls.join(", ")}. The dice was rolled{" "}
        {diceRollCounter} times.
      </p>
    );
  }
};

export default DiceValue;
