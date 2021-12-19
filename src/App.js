import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [VSCode, a] = useState(['VS code 필수 단축키!', 'Intelli J 단축키!']);
  let [React, b] = useState('React.js 하는방법!');
  let [CHash, c] = useState('정처기를 따려면 C#은 필수?');  
  
  let style = {color : 'white', fontSize : '30px'}
  let imgStyle ={width: '60px'}

  return (
    <div className="App">
      <div className="black-nav">
        <img  style ={imgStyle}  src={logo}/>
        <div style ={style}>개발 blog</div>       
        
      </div>          
      <div className="list">
        <h3>{ VSCode[0] }</h3>
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
    </div>
    
  );
}

export default App;
