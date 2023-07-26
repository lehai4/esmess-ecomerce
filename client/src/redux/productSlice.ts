import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { ProductProps } from "../typeProps";

type initialStateType = {
  product: ProductProps[];
  status: boolean;
};
const product: ProductProps[] = [];
const status: boolean = true;
const initialState: initialStateType = {
  product,
  status,
};
const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getProductStart: (state) => {
      state.status = true;
    },
    getProductSuccess: (state, action: PayloadAction<ProductProps[]>) => {
      state.status = false;
      state.product = action.payload;
    },
    getProductFailure: (state) => {
      state.status = false;
    },
  },
});
export const { getProductStart, getProductSuccess, getProductFailure } =
  productSlice.actions;
export default productSlice.reducer;
