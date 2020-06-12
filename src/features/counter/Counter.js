import React from "react";
import { useDispatch } from "react-redux";
import Cell from "./Cell";
import {
  setCur,
  doNothing,
  zeroZero,
  zeroOne,
  zeroTwo,
  zeroThree,
  zeroFour,
  oneZero,
  oneOne,
  oneTwo,
  oneThree,
  oneFour,
  twoZero,
  twoOne,
  twoTwo,
  twoThree,
  twoFour,
  threeZero,
  threeOne,
  threeTwo,
  threeThree,
  threeFour,
  fourZero,
  fourOne,
  fourTwo,
  fourThree,
  fourFour,
} from "./counterSlice";

export function Counter() {
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="header">
        <div className="rewards">
          <h1>Rewards</h1>
        </div>
        <div className="categories">
          <h1>Categories</h1>
        </div>
      </div>
      <div className="under-header">
        <div className="first-block"></div>
        <div className="block">
          <h1>C1</h1>
        </div>
        <div className="block">
          <h1>C2</h1>
        </div>
        <div className="block">
          <h1>C3</h1>
        </div>
        <div className="block">
          <h1>C4</h1>
        </div>
        <div className="block">
          <h1>C5</h1>
        </div>
      </div>
      <div className="row">
        <div
          className="first-block"
          draggable="true"
          onDragStart={() => dispatch(setCur(doNothing()))}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        >
          <h1>R1</h1>
        </div>
        <Cell y="0" x="1" id="R1" red={zeroOne()} />
        <Cell y="0" x="0" id="R1" red={zeroZero()} />
        <Cell y="0" x="2" id="R1" red={zeroTwo()} />
        <Cell y="0" x="3" id="R1" red={zeroThree()} />
        <Cell y="0" x="4" id="R1" red={zeroFour()} />
      </div>
      <div className="row">
        <div
          className="first-block"
          draggable="true"
          onDragStart={() => dispatch(setCur(doNothing()))}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        >
          <h1>R2</h1>
        </div>
        <Cell y="1" x="0" id="R2" red={oneZero()} />
        <Cell y="1" x="1" id="R2" red={oneOne()} />
        <Cell y="1" x="2" id="R2" red={oneTwo()} />
        <Cell y="1" x="3" id="R2" red={oneThree()} />
        <Cell y="1" x="4" id="R2" red={oneFour()} />
      </div>
      <div className="row">
        <div
          className="first-block"
          draggable="true"
          onDragStart={() => dispatch(setCur(doNothing()))}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        >
          <h1>R3</h1>
        </div>
        <Cell y="2" x="0" id="R3" red={twoZero()} />
        <Cell y="2" x="1" id="R3" red={twoOne()} />
        <Cell y="2" x="2" id="R3" red={twoTwo()} />
        <Cell y="2" x="3" id="R3" red={twoThree()} />
        <Cell y="2" x="4" id="R3" red={twoFour()} />
      </div>
      <div className="row">
        <div
          className="first-block"
          draggable="true"
          onDragStart={() => dispatch(setCur(doNothing()))}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        >
          <h1>R4</h1>
        </div>
        <Cell y="3" x="0" id="R4" red={threeZero()} />
        <Cell y="3" x="1" id="R4" red={threeOne()} />
        <Cell y="3" x="2" id="R4" red={threeTwo()} />
        <Cell y="3" x="3" id="R4" red={threeThree()} />
        <Cell y="3" x="4" id="R4" red={threeFour()} />
      </div>
      <div className="row">
        <div
          className="first-block"
          draggable="true"
          onDragStart={() => dispatch(setCur(doNothing()))}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        >
          <h1>R5</h1>
        </div>
        <Cell y="4" x="0" id="R5" red={fourZero()} />
        <Cell y="4" x="1" id="R5" red={fourOne()} />
        <Cell y="4" x="2" id="R5" red={fourTwo()} />
        <Cell y="4" x="3" id="R5" red={fourThree()} />
        <Cell y="4" x="4" id="R5" red={fourFour()} />
      </div>
    </div>
  );
}
