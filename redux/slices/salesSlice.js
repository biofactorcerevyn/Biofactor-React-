import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summary: [
    { label: "MTD Revenue", value: "₹1.2 Cr", delta: "+12%" },
    { label: "Outstanding", value: "₹32 L", delta: "-3%" },
    { label: "Orders Awaiting Approval", value: 18, delta: "SO → RM → ZM → GM" },
  ],
  orders: [
    { id: "SO-1001", dealer: "AgroStar", amount: 120000, status: "Pending", region: "West" },
    { id: "SO-1002", dealer: "GreenField", amount: 78000, status: "Approved", region: "South" },
  ],
  dealers: [
    { name: "AgroStar", outstanding: 450000, creditDays: 30, region: "West" },
    { name: "FarmHub", outstanding: 120000, creditDays: 45, region: "North" },
  ],
  targets: [
    { region: "North", target: 120, achieved: 96 },
    { region: "West", target: 150, achieved: 132 },
    { region: "South", target: 110, achieved: 88 },
  ],
  performance: [
    { month: "Jan", value: 42 },
    { month: "Feb", value: 58 },
    { month: "Mar", value: 75 },
    { month: "Apr", value: 63 },
  ],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.unshift(action.payload);
    },
    updateDealer(state, action) {
      const idx = state.dealers.findIndex((d) => d.name === action.payload.name);
      if (idx >= 0) state.dealers[idx] = action.payload;
    },
  },
});

export const { addOrder, updateDealer } = salesSlice.actions;
export default salesSlice.reducer;

