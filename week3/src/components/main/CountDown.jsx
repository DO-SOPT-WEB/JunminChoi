// import React, { useEffect, useState } from "react";
// import RandomResult from "./RandomResult";

// export default function CountDown() {
//   const [countDown, setCountDown] = useState(3);
//   const [showResult, setShowResult] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (countDown > 0) {
//         setCountDown(countDown - 1);
//         console.log("here");
//       } else {
//         clearInterval(timer);
//         setShowResult(true);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [countDown]);

//   return (
//     <>
//       {countDown !== 0 && <div>{countDown}</div>}
//       {showResult && <RandomResult />}
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import RandomResult from "./RandomResult";

const CountDown = ({ setRandomType }) => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  return (
    <>
      {time ? (
        time
      ) : (
        <>
          <RandomResult setRandomType={setRandomType} />
        </>
      )}
    </>
  );
};

export default CountDown;
