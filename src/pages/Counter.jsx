import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, incbyamt, increment,reset } from '../features/counter/action';
const Counter = () => {
    const dispatch= useDispatch();
    const state = useSelector(state=>state.counterr);
    console.log(state);
  return (
    <div>
      <h1>Counter</h1>
      <h3>{state.count}</h3>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incbyamt(4))}>Decrement By 4</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
