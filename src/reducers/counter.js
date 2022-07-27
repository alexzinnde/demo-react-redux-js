import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    increaseByAmount: (state, action) => {
      state.counter += action.payload
    },
  },
})

export const {increment, decrement, increaseByAmount} = counterSlice.actions
export default counterSlice.reducer
