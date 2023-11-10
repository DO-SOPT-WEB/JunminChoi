import React, { useState } from "react";
import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import ThirdStage from "./ThirdStage";
import FOOD_LIST from "../../assets/data";
import ResultStage from "./ResultStage";

const Preference = () => {
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const [recommendationType, setRecommendationType] = useState(0);

  const filterList = () => {
    const firstFilteredList = FOOD_LIST.filter(
      (item) => item.category[0] === firstChoice
    );

    const secondFilteredList = firstFilteredList.filter(
      (item) => item.category[1] === secondChoice
    );

    const thirdFilteredList = secondFilteredList.filter(
      (item) => item.category[2] === thirdChoice
    );

    const finalResult = thirdFilteredList[0];

    return finalResult;
  };

  function renderStage() {
    switch (recommendationType) {
      case 0:
        return (
          <>
            <p>취향대로 추천해줄게</p>
            <button
              onClick={() => {
                setRecommendationType(1);
              }}
            >
              start
            </button>
          </>
        );
      case 1:
        return (
          <FirstStage
            setRecommendationType={setRecommendationType}
            firstChoice={firstChoice}
            setFirstChoice={setFirstChoice}
            setSecondChoice={setSecondChoice}
            setThirdChoice={setThirdChoice}
          />
        );

      case 2:
        return (
          <SecondStage
            setRecommendationType={setRecommendationType}
            secondChoice={secondChoice}
            setSecondChoice={setSecondChoice}
          />
        );

      case 3:
        return (
          <ThirdStage
            setRecommendationType={setRecommendationType}
            thirdChoice={thirdChoice}
            setThirdChoice={setThirdChoice}
            filterList={filterList}
          />
        );
      case 4:
        return (
          <ResultStage
            filterList={filterList}
            setRecommendationType={setRecommendationType}
            setFirstChoice={setFirstChoice}
            setSecondChoice={setSecondChoice}
            setThirdChoice={setThirdChoice}
          />
        );
      default:
        return (
          <>
            <p>취향대로 추천해줄게</p>
            <button
              onClick={() => {
                setRecommendationType(1);
              }}
            >
              start
            </button>
          </>
        );
    }
  }
  return <>{renderStage()}</>;
};
export default Preference;
