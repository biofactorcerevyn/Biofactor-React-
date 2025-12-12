import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [
    { id: "AST-01", name: "Forklift", location: "Warehouse - Mumbai", status: "Active" },
    { id: "AST-02", name: "QC Lab", location: "Plant - Pune", status: "Maintenance" },
  ],
  documents: [
    { id: "DOC-01", name: "ISO 9001", expires: "2026-01-01" },
    { id: "DOC-02", name: "FCO License", expires: "2025-08-15" },
  ],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAsset(state, action) {
      state.assets.push(action.payload);
    },
    addDocument(state, action) {
      state.documents.push(action.payload);
    },
  },
});

export const { addAsset, addDocument } = adminSlice.actions;
export default adminSlice.reducer;

