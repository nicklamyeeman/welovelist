import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './slices/jobsSlice'
import visitorReducer from './slices/visitorSlice'

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    visitor: visitorReducer
  }
})