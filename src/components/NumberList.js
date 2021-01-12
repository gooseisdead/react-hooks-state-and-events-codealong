import React, { useState } from "react";
import { randomNumber } from "../utils";

function Numbers() {
  function handleAddNumber() {
    const [numbers, setNumbers] = useState([1, 2, 3])
    const numberList = numbers.map((num) => <li key={num}>{num}</li>)}
    const newNumber = randomNumber();
    const newNumberArray = [...numbers, newNumber]
    setNumbers(newNumberArray)
    console.log(newNumber);
  

  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numberList}</ul>
    </div>
  );
}

export default Numbers;
