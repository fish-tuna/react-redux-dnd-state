import React from "react";
import { Counter } from "./features/counter/Counter";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, undo, redo } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const config = useSelector(selectCount);
  let localStorage = null;
  return (
    <div className="App">
      <Counter />
      <button onClick={() => dispatch(undo())}>Undo</button>
      <button onClick={() => dispatch(redo())}>Redo</button>
      <button
        onClick={() => {
          localStorage = config;
          console.log(config);
        }}
      >
        Save and console.log configuration
      </button>
    </div>
  );
}

export default App;
