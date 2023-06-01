import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { useGetProductDetailInfoQuery } from "store/services/product";
import { ProductDetailInfo } from "types/product";

const useGetProductDetailInfo = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data } = useGetProductDetailInfoQuery({ id });

  const [detailInfo, setDetailInfo] = useState<ProductDetailInfo | null>(null);

  useEffect(() => {
    if (data) {
      const obj = data[0];
      setDetailInfo(obj);
      console.log(obj);
    }
  }, [data]);

  return { detailInfo };
};

export default useGetProductDetailInfo;
