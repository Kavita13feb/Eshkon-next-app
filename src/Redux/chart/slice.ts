import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface chartState {
    actualYValues: number[];
}

const initialState: chartState = {
    actualYValues: [40, 35, 25, 20, 10],

}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {toggleTheme } = chartSlice.actions

export default chartSlice.reducer