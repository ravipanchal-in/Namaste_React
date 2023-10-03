import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      //mutating the state here
      state.items.pop();
    },
    clearCart: (state) => {
// RTK - either mutate the existing state or return the new state

      // 01 - mutating the  existing state here
      state.items.length = 0;

      // 02 - retuening the new state
      // return {items:[]};
    },
  },
});
export const {addItem,removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;