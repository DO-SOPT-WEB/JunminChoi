import React from "react";
import "./index.css";
const FirstStage = ({ setRecommendationType, setFirstChoice, firstChoice }) => {
  return (
    <>
      <button
        onClick={() => {
          setFirstChoice("korea");
        }}
        className={firstChoice === "korea" ? "selected" : ""}
      >
        한식
      </button>
      <button
        onClick={() => {
          setFirstChoice("japan");
        }}
        className={firstChoice === "japan" ? "selected" : ""}
      >
        일식
      </button>
      <button
        onClick={() => {
          setFirstChoice("china");
        }}
        className={firstChoice === "china" ? "selected" : ""}
      >
        중식
      </button>

      {firstChoice === "" ? (
        <button
          onClick={() => {
            setRecommendationType(2);
          }}
          disabled
        >
          NextStage
        </button>
      ) : (
        <button
          onClick={() => {
            setRecommendationType(2);
          }}
        >
          NextStage
        </button>
      )}

      {/* <button
        onClick={() => {
          setRecommendationType(2);
        }}
      >
        NextStage
      </button> */}
      <button
        onClick={() => {
          setRecommendationType(0);
        }}
      >
        previousStage
      </button>
    </>
  );
};

export default FirstStage;
