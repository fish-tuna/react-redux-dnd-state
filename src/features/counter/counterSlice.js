import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ],
    history: [
      [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    ],
    index: [0, 0],
    cur: () => {},
  },
  reducers: {
    addHist: (state) => {
      if (state.index[0] === state.index[1]) {
        state.history.push(state.value);
        state.index[0] += 1;
        state.index[1] += 1;
      } else {
        state.index[0] += 1;
        state.index[1] = state.index[0];
        state.history = state.history.slice(0, state.index[0]);
        state.history.push(state.value);
      }
    },
    undo: (state) => {
      if (state.index[0] > 0) {
        state.index[0] -= 1;
        state.value = state.history[state.index[0]];
      }
    },
    redo: (state) => {
      if (state.index[0] < state.index[1]) {
        state.index[0] += 1;
        state.value = state.history[state.index[0]];
      }
    },
    doNothing: () => {},
    setCur: (state, action) => {
      state.cur = action.payload;
    },
    zeroZero: (state) => {
      state.value[0][0] = !state.value[0][0];
      //state.reducers.addHist();
    },
    zeroOne: (state) => {
      state.value[0][1] = !state.value[0][1];
    },
    zeroTwo: (state) => {
      state.value[0][2] = !state.value[0][2];
    },
    zeroThree: (state) => {
      state.value[0][3] = !state.value[0][3];
    },
    zeroFour: (state) => {
      state.value[0][4] = !state.value[0][4];
    },
    oneZero: (state) => {
      state.value[1][0] = !state.value[1][0];
    },
    oneOne: (state) => {
      state.value[1][1] = !state.value[1][1];
    },
    oneTwo: (state) => {
      state.value[1][2] = !state.value[1][2];
    },
    oneThree: (state) => {
      state.value[1][3] = !state.value[1][3];
    },
    oneFour: (state) => {
      state.value[1][4] = !state.value[1][4];
    },
    twoZero: (state) => {
      state.value[2][0] = !state.value[2][0];
    },
    twoOne: (state) => {
      state.value[2][1] = !state.value[2][1];
    },
    twoTwo: (state) => {
      state.value[2][2] = !state.value[2][2];
    },
    twoThree: (state) => {
      state.value[2][3] = !state.value[2][3];
    },
    twoFour: (state) => {
      state.value[2][4] = !state.value[2][4];
    },
    threeZero: (state) => {
      state.value[3][0] = !state.value[3][0];
    },
    threeOne: (state) => {
      state.value[3][1] = !state.value[3][1];
    },
    threeTwo: (state) => {
      state.value[3][2] = !state.value[3][2];
    },
    threeThree: (state) => {
      state.value[3][3] = !state.value[3][3];
    },
    threeFour: (state) => {
      state.value[3][4] = !state.value[3][4];
    },
    fourZero: (state) => {
      state.value[4][0] = !state.value[4][0];
    },
    fourOne: (state) => {
      state.value[4][1] = !state.value[4][1];
    },
    fourTwo: (state) => {
      state.value[4][2] = !state.value[4][2];
    },
    fourThree: (state) => {
      state.value[4][3] = !state.value[4][3];
    },
    fourFour: (state) => {
      state.value[4][4] = !state.value[4][4];
    },
  },
});

export const {
  addHist,
  undo,
  redo,
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
} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectCur = (state) => state.counter.cur;

export default counterSlice.reducer;
