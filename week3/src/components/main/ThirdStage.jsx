import React from "react";

const ThirdStage = ({ setRecommendationType, setThirdChoice, thirdChoice }) => {
  return (
    <>
      <button
        onClick={() => {
          setThirdChoice("soupX");
        }}
        className={thirdChoice === "soupX" ? "selected" : ""}
      >
        국물X
      </button>
      <button
        onClick={() => {
          setThirdChoice("soup");
        }}
        className={thirdChoice === "soup" ? "selected" : ""}
      >
        국물O
      </button>

      {thirdChoice === "" ? (
        <button
          onClick={() => {
            setRecommendationType(4);
          }}
          disabled
        >
          NextStage
        </button>
      ) : (
        <button
          onClick={() => {
            setRecommendationType(4);
          }}
        >
          NextStage
        </button>
      )}

      <button
        onClick={() => {
          setRecommendationType(2);
        }}
      >
        previousStage
      </button>
    </>
  );
};

export default ThirdStage;
