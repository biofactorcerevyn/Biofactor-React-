import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summary: {
    revenueMTD: 1.2,
    revenueYTD: 11.4,
    stockHealth: 92,
    productionUtil: 78,
    overdue: 14,
  },
  alerts: [
    { id: "ALT-01", type: "Stockout Risk", message: "BIO-NPK-01 low in West" },
    { id: "ALT-02", type: "Payment Delay", message: "Dealer AgroStar overdue 18 days" },
  ],
};

const executiveSlice = createSlice({
  name: "executive",
  initialState,
  reducers: {
    pushAlert(state, action) {
      state.alerts.unshift(action.payload);
    },
  },
});

export const { pushAlert } = executiveSlice.actions;
export default executiveSlice.reducer;

