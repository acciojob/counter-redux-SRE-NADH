
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "../redux/counterSlice";

const App = () => {
  const {counter} = useSelector((state)=>state.counter)


const dispatch = useDispatch();
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{counter}</h1>
        <button onClick={()=>{dispatch(increment())}} id="increment">increment</button>
        <button onClick={()=>{dispatch(decrement())}} id="decrement">decrement</button>
    </div>
  
  )
}

export default App
