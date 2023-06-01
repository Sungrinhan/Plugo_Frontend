import { rest } from "msw";

import productDetailList from "./productDetailList.json";
import productList from "./productLists.json";

export const handlers = [
  rest.get("/productlist", async (_req, res, ctx) => {
    return res(ctx.json(productList));
  }),

  rest.get(`/productdetail/:id`, (_req, res, ctx) => {
    const { id } = _req.params;

    const filteredItem = productDetailList.filter(
      (product) => product.id === Number(id),
    );

    return res(ctx.json(filteredItem));
  }),
];
