import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboard: {
    cash: 3.4,
    receivables: 1.2,
    payables: 0.9,
    burn: 0.3,
  },
  ledger: [
    { id: "FIN-01", type: "Invoice", party: "AgroStar", amount: 240000, status: "Open" },
    { id: "FIN-02", type: "Payment", party: "BioChem", amount: 90000, status: "Settled" },
  ],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addLedger(state, action) {
      state.ledger.unshift(action.payload);
    },
  },
});

export const { addLedger } = financeSlice.actions;
export default financeSlice.reducer;

