import { LOGIN } from "@/constants/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  id: number;
  name: string;
  token: string;
  isLoad: boolean;
}

const initialState: CounterState = {
  id: 0,
  name: "",
  token: "",
  isLoad: false,
};

const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initiAuthState(state) {
      const dataLogin = localStorage.getItem(LOGIN);
      if (dataLogin) {
        const jsonLogin = JSON.parse(dataLogin);
        state.id = jsonLogin.id;
        state.name = jsonLogin.name;
        state.token = jsonLogin.token;
      }
      state.isLoad = true;
    },

    login(state, action: PayloadAction<CounterState>) {
      localStorage.setItem(
        LOGIN,
        JSON.stringify({
          id: action.payload.id,
          name: action.payload.name,
          token: action.payload.token,
          isLoad: action.payload.isLoad,
        })
      );

      state.id = action.payload.id;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoad = action.payload.isLoad;
    },

    logOut(state) {
      state.id = 0;
      state.name = "";
      state.token = "";
      state.isLoad = false;
      localStorage.removeItem(LOGIN);
    },
  },
});

export const { initiAuthState, logOut, login } = counterSlice.actions;

export default counterSlice.reducer;
