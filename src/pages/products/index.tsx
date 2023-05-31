import styled from "@emotion/styled";
import CardList from "components/CardList";
import SideBar from "components/SideBar";

const ProductsPage = () => {
  return (
    <Main>
      <Container>
        <LayoutWrap>
          <SideBar />
          <CardList />
        </LayoutWrap>
      </Container>
    </Main>
  );
};

export default ProductsPage;

const Main = styled.div`
  padding: 112px 0px 286px;
`;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  padding: 0 32px;
`;

const LayoutWrap = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
`;
