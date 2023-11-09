import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [prefer, setPrefer] = useState("");
  const [showStartButton, setShowStartButton] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);

  const preferClick = () => {
    setPrefer("취향대로 추천");
    setShowStartButton(true);
    setShowResetButton(true);
  };

  const randomClick = () => {
    setPrefer("랜덤 추천");
    setShowStartButton(true);
    setShowResetButton(true);
  };

  const startClick = () => {
    // "Start" 버튼 클릭 시 실행할 동작
  };

  const homeClick = () => {
    // "처음으로" 버튼 클릭 시 초기 상태로 돌아가도록 설정
    setPrefer("");
    setShowStartButton(false);
    setShowResetButton(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>오늘의 점메추!</h1>
        <p>오늘은 어떤 종류가 먹고 싶어?</p>
        <div>
          {showResetButton && <Button onClick={homeClick} text="처음으로" />}
          {showStartButton ? (
            <>
              <p>{prefer}를 선택했습니다.</p>
              <Button onClick={startClick} text="Start" />
            </>
          ) : (
            <>
              <Button onClick={preferClick} text="취향대로 추천" />
              <Button onClick={randomClick} text="랜덤 추천" />
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
