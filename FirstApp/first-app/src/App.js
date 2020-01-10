import React from 'react';
import logo from './logo.svg';
import './App.css';

// 컴포넌트

// const myStyle = { 
//   color: 'red',
//   fontWeight: 900,
// }

function App() {
  return (
    <div className="App">
      <h1 className={'myStyle'}>안녕하세요</h1>
      <div className={'post'}>
        첫 게시글입니다.
      </div>
    </div>
  );
}

// 컴포넌트 내보내기 (default = 이 파일은 default를 기본적으로 하나만 export 하겠다)
export default App;
