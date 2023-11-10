import React, { useState } from "react";
import CountDown from "./CountDown";

const Random = () => {
  const [randomType, setRandomType] = useState(false);
  function result() {
    setRandomType(true);
  }
  return (
    <>
      {!randomType && (
        <>
          <p>랜덤으로 추천해줄게</p>
          <button onClick={result}>start</button>
        </>
      )}
      {randomType && <CountDown setRandomType={setRandomType} />}
    </>
  );
};

export default Random;
