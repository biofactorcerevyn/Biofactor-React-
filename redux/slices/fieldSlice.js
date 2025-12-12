import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farmers: [
    { name: "Ramesh Patil", village: "Nashik", crop: "Grapes", hectares: 3.2 },
    { name: "Priya Nair", village: "Coimbatore", crop: "Coconut", hectares: 5.4 },
  ],
  visits: [
    { id: "VIS-1001", officer: "SO-23", farmer: "Ramesh Patil", status: "Completed" },
    { id: "VIS-1002", officer: "MDO-12", farmer: "Priya Nair", status: "Planned" },
  ],
  demos: [
    { id: "DM-01", crop: "Paddy", stage: "Vegetative", health: 82 },
    { id: "DM-02", crop: "Cotton", stage: "Flowering", health: 75 },
  ],
};

const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    registerFarmer(state, action) {
      state.farmers.push(action.payload);
    },
    logVisit(state, action) {
      state.visits.unshift(action.payload);
    },
    addDemo(state, action) {
      state.demos.push(action.payload);
    },
  },
});

export const { registerFarmer, logVisit, addDemo } = fieldSlice.actions;
export default fieldSlice.reducer;

