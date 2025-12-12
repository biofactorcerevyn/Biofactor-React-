import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: [
    { sku: "BIO-NPK-01", qty: 820, batch: "BCH-223", expiry: "2026-03-01", location: "Mumbai" },
    { sku: "BIO-MICRO-05", qty: 410, batch: "BCH-208", expiry: "2025-12-20", location: "Hyderabad" },
  ],
  movements: [
    { id: "MOV-1001", type: "Inward", qty: 120, sku: "BIO-NPK-01" },
    { id: "MOV-1002", type: "Outward", qty: 60, sku: "BIO-MICRO-05" },
  ],
  transfers: [
    { id: "TR-001", from: "Mumbai", to: "Nagpur", status: "In Transit" },
    { id: "TR-002", from: "Hyderabad", to: "Bengaluru", status: "Completed" },
  ],
  dispatches: [
    { id: "DSP-101", vehicle: "MH12AB1234", status: "Loading", destination: "Pune" },
  ],
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    addMovement(state, action) {
      state.movements.unshift(action.payload);
    },
    addTransfer(state, action) {
      state.transfers.unshift(action.payload);
    },
  },
});

export const { addMovement, addTransfer } = warehouseSlice.actions;
export default warehouseSlice.reducer;

