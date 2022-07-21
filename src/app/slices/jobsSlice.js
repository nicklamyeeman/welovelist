import { createSlice } from '@reduxjs/toolkit'

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: []
  },
  reducers: {
    addJob: (state, job) => {
      const {payload} = job;
      state.jobs = [...state.jobs, payload];
    }
  }
})

const { actions, reducer } = jobsSlice;
export const { addJob } = actions;
export default reducer;