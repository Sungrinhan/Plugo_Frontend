import { useState, useEffect } from "react";

import styled from "@emotion/styled";
import { useGetProductListQuery } from "store/services/product";
import { Product } from "types/product";

import Card from "./Card";

const CardList = () => {
  const [productList, setProductList] = useState<Product[] | []>([]);

  const { data, isLoading } = useGetProductListQuery(null);

  useEffect(() => {
    if (data) {
      setProductList(data);
    }
  }, [data]);

  return (
    <Wrapper>
      <Container>
        <Layout>
          {isLoading ? (
            <div>loading...</div>
          ) : productList?.length ? (
            productList.map((product) => {
              return <Card key={product.id} product={product} />;
            })
          ) : (
            <div>nothing to show...</div>
          )}
        </Layout>
      </Container>
    </Wrapper>
  );
};

export default CardList;

const Wrapper = styled.div`
  flex: 1 1 0;

  max-width: 100%;
`;

const Container = styled.div`
  margin-bottom: 40px !important;
  padding-top: 16px !important;
  padding-bottom: 24px !important;
`;

const Layout = styled.div`
  padding-bottom: 16px !important;
  flex-wrap: wrap;
  margin: -12px;
  display: flex;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
