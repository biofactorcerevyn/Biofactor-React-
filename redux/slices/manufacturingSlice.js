import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  batches: [
    { id: "BAT-001", product: "BIO-NPK-01", stage: "QC", cost: 420000 },
    { id: "BAT-002", product: "BIO-MICRO-05", stage: "Production", cost: 230000 },
  ],
  qc: [
    { id: "QC-01", batch: "BAT-001", status: "Pass", moisture: "12%" },
    { id: "QC-02", batch: "BAT-002", status: "Pending", moisture: "14%" },
  ],
  machines: [
    { id: "MCH-01", name: "Granulator-1", downtime: 1.2, reason: "Belt alignment" },
    { id: "MCH-02", name: "Dryer-2", downtime: 0.4, reason: "Calibration" },
  ],
};

const manufacturingSlice = createSlice({
  name: "manufacturing",
  initialState,
  reducers: {
    addBatch(state, action) {
      state.batches.unshift(action.payload);
    },
    updateQC(state, action) {
      const idx = state.qc.findIndex((q) => q.id === action.payload.id);
      if (idx >= 0) state.qc[idx] = action.payload;
    },
  },
});

export const { addBatch, updateQC } = manufacturingSlice.actions;
export default manufacturingSlice.reducer;

