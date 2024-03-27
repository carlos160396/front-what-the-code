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

    logOut(state) {
      state.id = 0;
      state.name = "";
      state.token = "";
      state.isLoad = false;
      localStorage.removeItem(LOGIN);
    },

    // addOne(state) {
    //   state.count++;
    // },
    // substractOne(state) {
    //   if (state.count === 0) return;
    //   state.count--;
    // },
    // resetCount(state, action: PayloadAction<number>) {
    //   if (action.payload < 0) action.payload = 0;
    //   state.count = action.payload;
    // },
  },
});

export const { initiAuthState, logOut } = counterSlice.actions;

export default counterSlice.reducer;
