import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { chartSlotInterface, chartTypes } from '../../../interfaces'

import _ from "lodash";


interface chartSlotsSliceInitialStateInterface {
    chartSlots: chartSlotInterface[],
    slotCounter: number

}

const initialState: chartSlotsSliceInitialStateInterface = {
  chartSlots: [
        { key: '1', x: 0, y: 0, w: 6, h: 2, minW: 3, chartType: chartTypes.line },
        { key: '2', x: 6, y: 0, w: 6, h: 2, minW: 3, chartType: chartTypes.column },
        { key: '3', x: 0, y: 1, w: 12, h: 2, minW: 3, chartType: chartTypes.line },
        { key: '4', x: 0, y: 2, w: 4, h: 2, minW: 3, chartType: chartTypes.pie},
        { key: '5', x: 4, y: 2, w: 4, h: 2, minW: 3, chartType: chartTypes.bar },
        { key: '6', x: 8, y: 2, w: 4, h: 2, minW: 3, chartType: chartTypes.column }
    ], 
    slotCounter: 0
}

export const chartSlotsSlice = createSlice({
  name: 'chartSlots',
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<chartTypes>) => {
        state.chartSlots = [...state.chartSlots, { key: `n${state.slotCounter}`, x: 0, y: Infinity, w: 12, h: 2, minW: 3, chartType: action.payload }]
        state.slotCounter += 1
    },
    removeChart: (state, action: PayloadAction<string>) => {
        state.chartSlots = (_.reject(state.chartSlots, {key: action.payload}))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addChart, removeChart } = chartSlotsSlice.actions

export default chartSlotsSlice.reducer