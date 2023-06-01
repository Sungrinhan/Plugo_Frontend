import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductDetailInfo } from "types/product";

const BASE_URL = "/";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProductList: builder.query<Product[], null>({
      query: () => "/productlist",
    }),

    getProductDetailInfo: builder.query<ProductDetailInfo[], { id: string }>({
      query: ({ id }) => ({
        url: `/productdetail/${id}`,
      }),
    }),
  }),
});

export const { useGetProductListQuery, useGetProductDetailInfoQuery } =
  productApi;
