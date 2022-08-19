import { configureStore } from '@reduxjs/toolkit'
import airPollutionReducer from '~/src/store/slice/airPollutionSlice.js'

export const store = configureStore({
  reducer: { airPollution: airPollutionReducer },
})
