import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "store/services/product";
import { Product, ProductDetailInfo } from "types/product";

const initialState = {
  productList: [] as Product[],
  cartList: [] as ProductDetailInfo[],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCartList(state, action) {
      // 카트에 없으면 추가
      // 있으면 quantitiy 추가
      state.cartList.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      productApi.endpoints.getProductList.matchFulfilled,
      (state, action) => {
        state.productList = action.payload;
      },
    ),
});

export const { addCartList } = productSlice.actions;

export default productSlice.reducer;
