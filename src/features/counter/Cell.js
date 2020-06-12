import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setCur, selectCur, addHist } from "./counterSlice";

export default function Counter(props) {
  const config = useSelector(selectCount);
  const dispatch = useDispatch();
  const current = useSelector(selectCur);

  return (
    <div
      className="block"
      draggable="true"
      onDragStart={() => {
        dispatch(setCur(props.red));
      }}
      onDrop={(e) => {
        e.preventDefault();
        if (!config[props.y][props.x]) {
          dispatch(props.red);
          dispatch(current);
          dispatch(addHist());
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <div id={config[props.y][props.x] ? "show" : "hide"}>
        <h1>{props.id}</h1>
        <button
          onClick={() => {
            dispatch(props.red);
            dispatch(addHist());
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}
