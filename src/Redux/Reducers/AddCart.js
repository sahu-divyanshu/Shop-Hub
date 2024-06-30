import { createSlice } from "@reduxjs/toolkit";

const AddCart = createSlice({
  name: "AddToCart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, payload) => {
      let checkStatus = false;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === payload.payload.id) {
          checkStatus = true;
          break;
        }
      }
      if (!checkStatus) {
        state.items.push(payload.payload);
      }
    },
    removeItem: (state, payload) => {
      state.items = state.items.filter((user) => {
        console.log(user.id !== payload.payload.id);
        return user.id !== payload.payload.id;
      });
    },
  },
});

export const { addItem, removeItem } = AddCart.actions;
export const cartItems = (state) => state.AddToCart.items;
export default AddCart.reducer;
