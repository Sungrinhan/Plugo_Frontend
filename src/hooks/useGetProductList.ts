import { useState, useEffect } from "react";

import { useGetProductListQuery } from "store/services/product";
import { Product } from "types/product";

const useGetProductList = () => {
  const [productList, setProductList] = useState<Product[] | []>([]);

  const { data, isLoading } = useGetProductListQuery(null);

  useEffect(() => {
    if (data) {
      setProductList(data);
    }
  }, [data]);

  return { productList, isLoading };
};

export default useGetProductList;
