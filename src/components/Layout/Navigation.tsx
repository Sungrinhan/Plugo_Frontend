import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

const Navigation = () => {
  return (
    <Container>
      <Menu>
        <SpanPadding>HOME</SpanPadding>
      </Menu>
      <Menu>
        <SpanPadding>NEW ARRIVALS</SpanPadding>
      </Menu>
      <Menu>
        <SpanPadding>CATEGORIES</SpanPadding>
      </Menu>
      <Menu>
        <SpanPadding>DEFECT SALE</SpanPadding>
      </Menu>
      <Menu>
        <NavLink to="/products">
          <SpanPadding>ALL PRODUCT</SpanPadding>
        </NavLink>
      </Menu>
      <Menu>
        <SpanPadding>HOW TO ORDER</SpanPadding>
      </Menu>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const SpanPadding = styled.span`
  padding: 0 17.7778px;
`;
