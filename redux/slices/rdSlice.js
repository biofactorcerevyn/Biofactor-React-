import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trials: [
    { id: "TR-01", crop: "Tomato", stage: "Vegetative", rating: 8.2 },
    { id: "TR-02", crop: "Soybean", stage: "Flowering", rating: 7.5 },
  ],
  pipeline: [
    { id: "P-01", name: "BioStim A", stage: "Pilot" },
    { id: "P-02", name: "BioFung B", stage: "Field Trials" },
  ],
};

const rdSlice = createSlice({
  name: "rd",
  initialState,
  reducers: {
    addTrial(state, action) {
      state.trials.unshift(action.payload);
    },
    addPipelineItem(state, action) {
      state.pipeline.push(action.payload);
    },
  },
});

export const { addTrial, addPipelineItem } = rdSlice.actions;
export default rdSlice.reducer;

