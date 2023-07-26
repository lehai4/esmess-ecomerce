import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { categorySliceProps } from "../typeProps";

type initialStateType = {
  category: categorySliceProps[];
  status: boolean;
};
const category: categorySliceProps[] = [];
const status: boolean = true;
const initialState: initialStateType = {
  category,
  status,
};
const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    getCategoryStart: (state) => {
      state.status = true;
    },
    getCategorySuccess: (
      state,
      action: PayloadAction<categorySliceProps[]>
    ) => {
      state.status = false;
      state.category = action.payload;
    },
    getCategoryFailure: (state) => {
      state.status = false;
    },
  },
});
export const { getCategoryStart, getCategorySuccess, getCategoryFailure } =
  categorySlice.actions;
export default categorySlice.reducer;
