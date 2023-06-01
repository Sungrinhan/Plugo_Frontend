import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
`;
