import { configureStore } from '@reduxjs/toolkit'
import  chartSlotsReducer  from './features/chart-slots/ChartSlotsSlice'

export const store = configureStore({
  reducer: {
    chartSlots: chartSlotsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch