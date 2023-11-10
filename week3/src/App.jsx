import React, { useState } from "react";
import Preference from "./components/main/Preference";
import Random from "./components/main/Random";
import Test from "./components/header/Test";

const App = () => {
  const [currentStep, setCurrentStep] = useState("");
  const renderMain = () => {
    switch (currentStep) {
      case "random":
        return <Random />;
      case "prefer":
        return <Preference />;
      default:
        return (
          <>
            <p>원하는 추천 방식을 골라죠~</p>
            <button
              onClick={() => {
                setCurrentStep("prefer");
              }}
            >
              취향대로 추천
            </button>
            <button
              onClick={() => {
                setCurrentStep("random");
              }}
            >
              랜덤 추천
            </button>
          </>
        );
    }
  };
  return (
    <>
      <Test />
      {renderMain()}
    </>
  );
};

export default App;
