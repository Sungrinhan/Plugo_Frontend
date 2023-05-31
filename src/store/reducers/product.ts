import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "store/services/product";
import { Product } from "types/product";

const initialState = {
  productList: [] as Product[],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList(state, action) {
      state.productList = action.payload.data;
    },
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      productApi.endpoints.getProductList.matchFulfilled,
      (state, action) => {
        state.productList = action.payload;
      }
    ),
});

export const { getProductList } = productSlice.actions;

export default productSlice.reducer;
