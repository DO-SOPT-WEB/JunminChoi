import React, { useState } from "react";

const Preference = ({ currentStep, setCurrentStep }) => {
  const [recommendationType, setRecommendationType] = useState(null);
  const handleClick = () => {};
  return (
    <div>
      {currentStep === 1 && (
        <>
          <button onClick={handleClick}>취향대로 추천</button>
          <button>랜덤 추천</button>
        </>
      )}
    </div>
  );
};

export default Preference;
