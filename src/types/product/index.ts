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
    },
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
        },
      ];
    },
  ];
  releaseCountDown: boolean;
  numOrders: number;
  score: number;
}

export interface ProductDetailInfo {
  id: number;
  name: string;
  quantity?: number;
  productType: string;
  releaseDate: string;
  useStock: boolean;
  preorderPolicy: string;
  images: [
    {
      url: string;
    },
  ];
  productVariations: [
    {
      id: number;
      product: {
        id: number;
      };
      price: number;
      weight: number;
      inventories: [
        {
          quantity: number;
          location: {
            id: number;
          };
        },
      ];
      details: [
        {
          id: number;
          key: string;
          value: string;
          imageURL: string;
        },
      ];
    },
  ];
  numOrders: number;
  description: string;
  estimatedDeliveryTimeInstock: string;
  estimatedDeliveryTimePreorder: string;
  productCode: string;
  weight: number;
  score: number;
  vendorCategories: [
    {
      id: number;
      name: string;
      image: string;
      sort: number;
    },
  ];
  releaseCountDown: true;
}
