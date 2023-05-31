import { rest } from "msw";

import productDetailList from "./productDetailList.json";
import productList from "./productLists.json";

export const handlers = [
  rest.get("/productlist", async (_req, res, ctx) => {
    return res(ctx.json(productList));
  }),

  rest.get(`/productdetail`, (_req, res, ctx) => {
    const { productId } = _req.params;

    const filteredItem = productDetailList.filter(
      (product) => product.id === Number(productId),
    );

    return res(ctx.json(filteredItem));
  }),
];
