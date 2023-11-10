import React from "react";

const SecondStage = ({
  setRecommendationType,
  setSecondChoice,
  secondChoice,
}) => {
  return (
    <>
      <button
        onClick={() => {
          setSecondChoice("rice");
        }}
        className={secondChoice === "rice" ? "selected" : ""}
      >
        밥
      </button>
      <button
        onClick={() => {
          setSecondChoice("noodle");
        }}
        className={secondChoice === "noodle" ? "selected" : ""}
      >
        면
      </button>
      <button
        onClick={() => {
          setSecondChoice("beef");
        }}
        className={secondChoice === "beef" ? "selected" : ""}
      >
        고기/해물
      </button>
      {secondChoice === "" ? (
        <button
          onClick={() => {
            setRecommendationType(3);
          }}
          disabled
        >
          NextStage
        </button>
      ) : (
        <button
          onClick={() => {
            setRecommendationType(3);
          }}
        >
          NextStage
        </button>
      )}

      <button
        onClick={() => {
          setRecommendationType(1);
        }}
      >
        previousStage
      </button>
    </>
  );
};

export default SecondStage;
