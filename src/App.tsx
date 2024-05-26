import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState, 증가, 감소, 더하기, 초기화 } from '.';

// 타입스크립트 (자바스크립트 + 타입명시)
let name : string;
let age : number;
let isStudent : boolean;
let hobbies : string[];     // 문자열 배열
let role : (string | number)[]; // 문자열 또는 숫자

type Person = {
  name:string,
  age?:number     // ? : 비워져있을수도 있다
}

let person : Person = {
  name:'peter',
  // age:22
}

function App() {

  let 박스 : JSX.Element = <div>박스</div>
  const 리덕스에서꺼내옴 = useSelector((state:RootState)=>state)
  const dispatch : Dispatch = useDispatch()
  // 리덕스에서 state/변수 꺼내올려면 useSelector 사용
  // dispatch 라는 키워드를 통해서 리듀서의 함수를 사용 가능
  // 리듀서의 함수는 리덕스에 보관된 상태/변수 를 수정하기 위해 제공


  return (
    <div className="App">
      <Profile name='개구리' age='20'/>
      <p>{리덕스에서꺼내옴.리듀서1.user}입니다.</p>
      <p>{리덕스에서꺼내옴.리듀서1.count}</p>
      <button onClick={()=>{dispatch(증가())}}>증가버튼</button>
      <button onClick={()=>{dispatch(감소())}}>감소버튼</button>
      <button onClick={()=>{dispatch(더하기(3))}}>더하기버튼3</button>
      <button onClick={()=>{dispatch(초기화())}}>초기화</button>
    </div>
  );
}

export default App;
