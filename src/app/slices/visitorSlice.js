import { createSlice } from '@reduxjs/toolkit'

const visitorSlice = createSlice({
  name: 'visitor',
  initialState: {
    visitor: undefined
  },
  reducers: {
    setVisitor: (state, visitorType) => {
      const {payload} = visitorType;
      state.visitor = payload;
    }
  }
})

const { actions, reducer } = visitorSlice;
export const { setVisitor } = actions;
export default reducer;