import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;