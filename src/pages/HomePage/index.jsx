import { useRef, useState } from "react";
import CardInput from "../../Components/CardInput";
import "./style.css";

export const HomePage = () => {
  const [inputRefs] = useState(Array.from({ length: 4 }, () => useRef(null)));
  const indexRef = useRef(0);

  const handleCardInput = (event) => {
    // console.log(event);
    indexRef.current = indexRef.current + 1;
    if (indexRef.current < inputRefs.length) {
      inputRefs[indexRef.current].current.focus();
    } else {
      inputRefs[indexRef.current - 1].current.blur();
    }
  };

  return (
    <div className="container">
      <CardInput changeInput={handleCardInput} inRef={inputRefs[0]} />
      <CardInput changeInput={handleCardInput} inRef={inputRefs[1]} />
      <CardInput changeInput={handleCardInput} inRef={inputRefs[2]} />
      <CardInput changeInput={handleCardInput} inRef={inputRefs[3]} />
    </div>
  );
};
