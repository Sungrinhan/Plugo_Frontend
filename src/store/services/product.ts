import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "types/product";

const BASE_URL = "/";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProductList: builder.query<Product[], null>({
      query: () => "/productlist",
    }),
  }),
});

export const { useGetProductListQuery } = productApi;
