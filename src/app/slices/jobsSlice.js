import { createSlice } from '@reduxjs/toolkit'

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: []
  },
  reducers: {
    addJob: (state, params) => {
      const {payload} = params;
      state.jobs = [...state.jobs, payload];
    }
  }
})

const { actions, reducer } = jobsSlice;
export const { addJob } = actions;
export default reducer;