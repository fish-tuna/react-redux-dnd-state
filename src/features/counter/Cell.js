import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  setCur,
  selectCur,
  addHist,
  selectCurRow,
  setCurRow,
} from "./counterSlice";

export default function Counter(props) {
  const config = useSelector(selectCount);
  const dispatch = useDispatch();
  const current = useSelector(selectCur);
  const curRow = useSelector(selectCurRow);

  return (
    <div
      className="block"
      draggable={config[props.y][props.x] ? "true" : "false"}
      onDragStart={() => {
        dispatch(setCur(props.red));
        dispatch(setCurRow(props.y));
      }}
      onDrop={(e) => {
        if (curRow == props.y) {
          e.preventDefault();
          if (!config[props.y][props.x]) {
            dispatch(props.red);
            dispatch(current);
            dispatch(addHist());
          }
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
