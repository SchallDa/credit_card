import { useState } from "react";
const CardInput = ({ changeInput, inRef }) => {
  const [input, setInput] = useState("");

  const handleCardInput = (event) => {
    console.log(event);
    let val = event.target.value;
    setInput(val);
    //todo do some validation, only numbers are allowed
    if (val.length === 4) {
      let numbers = Array.from(val).map((num) => Number(num));
      changeInput(numbers);
    }
  };

  return (
    <>
      <input type="text" value={input} ref={inRef} onChange={handleCardInput} />
    </>
  );
};
export default CardInput;
