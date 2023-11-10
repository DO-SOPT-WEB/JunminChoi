import React from "react";

const ResultStage = ({ filterList, setRecommendationType }) => {
  const result = filterList();
  return (
    <>
      <div>{result.name}</div>
      <img src={result.img} alt={result.name}></img>
      <button
        onClick={() => {
          setRecommendationType(0);
        }}
      >
        reset
      </button>
    </>
  );
};

export default ResultStage;
