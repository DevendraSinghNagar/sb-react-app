import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      console.log(state.items); // It will print Proxy
      // console.log(current(state.items));
      state.items.splice(index, 1);
    },
    clearAll: (state) => {
      state.items.length = 0;
      // return {items: []}
    },
  },
});

export const { addItem, removeItem, clearAll } = cartSlice.actions;
export default cartSlice.reducer;
