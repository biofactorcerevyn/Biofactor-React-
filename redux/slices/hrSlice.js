import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    { id: "EMP-01", name: "Aarav Mehta", role: "SO", department: "Sales" },
    { id: "EMP-02", name: "Nisha Rao", role: "HR", department: "People" },
  ],
  attendance: [
    { id: "EMP-01", status: "Present", checkIn: "09:12" },
    { id: "EMP-02", status: "Present", checkIn: "09:05" },
  ],
  payroll: [
    { id: "EMP-01", month: "Apr", amount: 65000, status: "Processed" },
  ],
};

const hrSlice = createSlice({
  name: "hr",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
    markAttendance(state, action) {
      state.attendance.unshift(action.payload);
    },
    addPayroll(state, action) {
      state.payroll.unshift(action.payload);
    },
  },
});

export const { addEmployee, markAttendance, addPayroll } = hrSlice.actions;
export default hrSlice.reducer;

