import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function App() {
  let count = useSelector((state)=>state.count)
  let dispatch = useDispatch();
  let ty = useRef("")
  let pay = useRef("")
  let handlechange = (e)=>{
    ty.current = e.target.value;
    console.log(ty.current,e.target.value)
  }
  return (
    <div className="App">
      <h2>counter : {count}</h2>
      <select onChange={handlechange}>
        <option value={"add"}>+</option>
        <option value={"sub"}>-</option>
        <option value={"mul"}>X</option>
        <option value={"div"}>/</option>
      </select>
      <input type="number"  onChange={(e)=>{pay.current=e.target.value;console.log(e.target.value,pay)}} />
      <button onClick={()=>{dispatch({type:ty.current,payload:pay.current});console.log(pay.current,ty.current)}}>Result</button>
    </div>
  );
}

export default App;
