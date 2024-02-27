import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface chartState {
    actualYValues: number[];
    inputData: { [key: string]: number | null };
}

const initialState: chartState = {
    actualYValues: [40, 35, 25, 20, 10],
    inputData: { "Jan": null, "Feb": null, "Mar": null, "Apr": null, "May": null }

}
enum ActionTypes {
    UPDATE_DATA = 'UPDATE_DATA',
    RESET_DATA = 'RESET_DATA'
  }
  
  interface UpdateDataAction {
    type: ActionTypes.UPDATE_DATA;
    payload: { month: string; value: number };
  }
  
  interface ResetDataAction {
    type: ActionTypes.RESET_DATA;
  }
  
  type Action = UpdateDataAction | ResetDataAction;
  

export const chartReducer = (state = initialState, action: Action,payload:any) => {
    switch (action.type) {
      case ActionTypes.UPDATE_DATA:
        return {
          ...state,
          inputData: {
            ...state.inputData,
            [action.payload.month]: action.payload.value
          },
          actualYValues: Object.values(state.inputData).map(val => parseInt(payload))
        };
      case ActionTypes.RESET_DATA:
        return {
          ...state,
          actualYValues: [40, 35, 25, 20, 10],
          inputData: { Jan: null, Feb: null, Mar: null, Apr: null, May: null }
        };
      default:
        return state;
    }
  };
