import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart:JSON.parse(localStorage.getItem('shoppingCart'))
  ? JSON.parse(localStorage.getItem('shoppingCart'))
  : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state , {payload}) => {
      const index = state.cart.findIndex(
        (product) => product.maKhoaHoc === payload.maKhoaHoc
      );

      if (index === -1) state.cart.push({ ...payload});
      localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
    },
    deleteCart: (state , {payload}) => {
      const carts = state.cart.filter(
        (product) => product.maKhoaHoc !== payload
      );

      state.cart = [...carts];
      localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
    }
  },
  extraReducers: (builder) => {
  },
});

// export actions
export const {addToCart,deleteCart} = cartSlice.actions;
// export reducer
export default cartSlice.reducer;
