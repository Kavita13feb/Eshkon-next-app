import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface themeState {
  theme:string
  isLoaded:boolean
}

const initialState: themeState = {
  theme: "dark",
  isLoaded:false

}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      
      state.theme = state.theme=="dark"?"light":"dark"
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {toggleTheme } = themeSlice.actions

export default themeSlice.reducer