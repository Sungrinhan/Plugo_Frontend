export interface GetProductListResponse {
  data: Product[];
}

export interface Product {
  id: number;
  name: string;
  productType: string;
  releaseDate: string;
  useStock: boolean;
  preorderPolicy: string;
  images: [
    {
      url: string;
    }
  ];
  productVariations: [
    {
      id: number;
      product: {
        id: number;
      };
      price: number;
      inventories: [
        {
          quantity: number;
          location: {
            id: number;
          };
        }
      ];
    }
  ];
  releaseCountDown: boolean;
  numOrders: number;
  score: number;
}
