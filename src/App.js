/*eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  let [VSCode, a] = useState(['VS code 필수 단축키!', 'Intelli J 단축키!']);
  let [React, b] = useState('React.js 하는방법!');
  let [CHash, c] = useState('정처기를 따려면 C#은 필수?');  
  let [따봉, 따봉변경] = useState(0);
  let style = {color : 'white', fontSize : '30px'}
  let imgStyle ={width: '60px'}

  let [modal, showModal] = useState(false)

  function 타이틀변경(){
    var newArray = [...VSCode];
    newArray[0] = 'Intelnpmli J 단축키!';
    a(newArray);

  }

  
  return (
    <div className="App">
      <div className="black-nav">
        <img  style ={imgStyle}  src={logo}/>
        <div style ={style}>개발 blog</div>         
      </div>    
      <button onClick ={타이틀변경}>버튼</button>      
      <div className="list">
        <h3>{ VSCode[0] }<span onClick={() => {따봉변경(따봉 + 1)}}>👍</span>{따봉}</h3>
        <p>12월 08일 발행</p>
        <hr/>    
      </div>
      <div className="list">
        <h3>{ React }</h3>
        <p>12월 09일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ CHash }</h3>
        <p>12월 10일 발행</p>
        <hr/>
      </div>

      <button onClick={() => {showModal(!modal)}}>버튼</button>
      {
        modal === true
        ? <Modal />
        : null
      }
      
    </div>
    
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}



export default App;
