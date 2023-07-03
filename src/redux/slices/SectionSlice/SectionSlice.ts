import { createSlice } from '@reduxjs/toolkit';
import type { sectionSliceInterface } from './interface/index';

const initialState = {
  section: 'portfolio',
  path: '/'
} as sectionSliceInterface

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload
    },
    setPath: (state, action) => {
      state.path = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSection, setPath } = sectionSlice.actions;

export default sectionSlice.reducer;