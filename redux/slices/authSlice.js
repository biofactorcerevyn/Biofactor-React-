import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  roles: [],
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { user, token, roles } = action.payload;
      state.user = user;
      state.token = token;
      state.roles = roles;
      state.loading = false;
    },
    logout() {
      return initialState;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { loginSuccess, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;

