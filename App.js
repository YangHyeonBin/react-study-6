import React, { useState } from 'react';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING'); // **state 변경**될 때마다 컴포넌트 함수 재평가, **재실행**함을 확인 가능

  const togglePragraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); // 토글로 작동 // 이전 state에 의존해 state 변경하므로 prevShowParagraph로 작명한 함수 이용
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={togglePragraphHandler}>Toggle paragraph!</Button>
    </div>
  );
};

export default App;